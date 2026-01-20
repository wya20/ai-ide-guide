<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Menu, X, Moon, Sun, Code2 } from 'lucide-vue-next'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDark = ref(true)
const searchQuery = ref('')

const navItems = [
  { name: '首页', path: '/' },
  { name: '全部工具', path: '/#ides' },
  { name: '快速入门', path: '/#getting-started' },
  { name: '常见问题', path: '/#faq' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/', query: { search: searchQuery.value } })
  }
}

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme !== 'light'
  document.documentElement.classList.toggle('dark', isDark.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div 
          class="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="navigateTo('/')"
        >
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <Code2 class="w-6 h-6 text-white" />
          </div>
          <span class="text-xl font-bold gradient-text hidden sm:block">AI编程导航</span>
        </div>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center gap-8">
          <a 
            v-for="item in navItems" 
            :key="item.path"
            :href="item.path"
            class="text-dark-300 hover:text-white transition-colors duration-300 font-medium"
            @click.prevent="navigateTo(item.path)"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- 搜索框 -->
        <div class="hidden md:flex items-center gap-4">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="搜索IDE..."
              class="w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl
                     text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50
                     transition-all duration-300"
              @keyup.enter="handleSearch"
            />
          </div>
          
          <!-- 主题切换 -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Moon v-if="isDark" class="w-5 h-5 text-primary-400" />
            <Sun v-else class="w-5 h-5 text-amber-400" />
          </button>
        </div>

        <!-- 移动端菜单按钮 -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-t border-white/10"
      >
        <div class="px-4 py-4 space-y-4">
          <!-- 移动端搜索 -->
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="搜索IDE..."
              class="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl
                     text-white placeholder-dark-400 focus:outline-none focus:border-primary-500/50"
              @keyup.enter="handleSearch"
            />
          </div>
          
          <!-- 移动端导航 -->
          <nav class="flex flex-col gap-2">
            <a 
              v-for="item in navItems" 
              :key="item.path"
              :href="item.path"
              class="px-4 py-3 text-dark-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
              @click.prevent="navigateTo(item.path)"
            >
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
