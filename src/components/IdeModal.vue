<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { X, ChevronRight, ExternalLink, Github, Star, Copy, Check } from 'lucide-vue-next'
import type { IDE, TabType } from '@/types'
import useIdes from '@/composables/useIdes'

const props = defineProps<{
  ide: IDE
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()
const { getAllIdes } = useIdes()

const activeTab = ref<TabType>('install')
const copiedCommand = ref<string | null>(null)

// 为FAQ添加isOpen状态
const faqsWithState = computed(() => {
  return props.ide.faqs.map(faq => ({
    ...faq,
    isOpen: false
  }))
})

const toggleFaq = (index: number) => {
  faqsWithState.value[index].isOpen = !faqsWithState.value[index].isOpen
}

const tabs = [
  { key: 'install' as TabType, label: '安装部署', icon: 'Download' },
  { key: 'config' as TabType, label: '基础配置', icon: 'Settings' },
  { key: 'tutorial' as TabType, label: '使用教程', icon: 'Play' },
  { key: 'faq' as TabType, label: '常见问题', icon: 'HelpCircle' },
]

const copyCommand = async (command: string) => {
  try {
    await navigator.clipboard.writeText(command)
    copiedCommand.value = command
    setTimeout(() => {
      copiedCommand.value = null
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const navigateToIde = (ideId: string) => {
  const ide = getAllIdes().find(i => i.id === ideId)
  if (ide) {
    router.push({ name: 'detail', params: { id: ideId } })
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    @click.self="emit('close')"
  >
    <!-- 遮罩层 -->
    <div 
      class="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"
      @click="emit('close')"
    ></div>

    <!-- 弹窗内容 -->
    <div 
      class="relative w-full max-w-5xl max-h-[90vh] bg-dark-900/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
    >
      <!-- 顶部头部 -->
      <div 
        class="relative p-8 text-white"
        :style="{ background: ide.gradient }"
      >
        <button 
          @click="emit('close')"
          class="absolute top-6 right-6 p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors duration-300"
        >
          <X class="w-6 h-6" />
        </button>

        <div class="flex flex-col md:flex-row md:items-start gap-6">
          <!-- 图标 -->
          <div 
              class="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
            >
              <Star class="w-14 h-14 text-white" />
            </div>

          <!-- 信息 -->
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h2 class="text-3xl font-bold">{{ ide.name }}</h2>
              <span 
                class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                :class="{
                  'from-emerald-400 to-emerald-600 bg-gradient-to-r': ide.difficulty === 'beginner',
                  'from-amber-400 to-amber-600 bg-gradient-to-r': ide.difficulty === 'intermediate',
                  'from-purple-400 to-purple-600 bg-gradient-to-r': ide.difficulty === 'advanced',
                }"
              >
                {{ ide.difficultyText }}
              </span>
            </div>
            
            <p class="text-white/80 text-lg mb-4">{{ ide.fullDesc }}</p>

            <div class="flex flex-wrap gap-3">
              <a 
                v-if="ide.officialWebsite"
                :href="ide.officialWebsite"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
              >
                <ExternalLink class="w-4 h-4" />
                官网
              </a>
              <a 
                v-if="ide.github"
                :href="ide.github"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
              >
                <Github class="w-4 h-4" />
                GitHub
              </a>
              <button 
                class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
              >
                <Star class="w-4 h-4" />
                收藏
              </button>
            </div>
          </div>
        </div>

        <!-- 特性标签 -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span 
            v-for="feature in ide.features" 
            :key="feature"
            class="px-3 py-1 bg-white/10 rounded-full text-sm"
          >
            {{ feature }}
          </span>
        </div>
      </div>

      <!-- Tab导航 -->
      <div class="flex border-b border-white/10 overflow-x-auto">
        <button 
          v-for="tab in tabs" 
          :key="tab.key"
          class="tab-item whitespace-nowrap"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab内容 -->
      <div class="p-8 overflow-y-auto max-h-[60vh]">
        <!-- 安装部署 -->
        <div v-if="activeTab === 'install'" class="space-y-8">
          <div v-for="(step, index) in ide.installSteps" :key="index" class="flex gap-6">
            <div class="step-number flex-shrink-0">{{ index + 1 }}</div>
            <div class="flex-1">
              <h4 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h4>
              <p class="text-dark-300 mb-4">{{ step.description }}</p>
              
              <div v-if="step.command" class="bg-dark-800 rounded-xl p-4 mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-dark-400 text-sm">命令</span>
                  <button 
                    @click="copyCommand(step.command!)"
                    class="p-1 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    <Check v-if="copiedCommand === step.command" class="w-4 h-4 text-emerald-400" />
                    <Copy v-else class="w-4 h-4 text-dark-400" />
                  </button>
                </div>
                <code class="text-primary-400 font-mono text-sm block">{{ step.command }}</code>
              </div>
              
              <div v-if="step.tip" class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <div class="flex items-start gap-3">
                  <Zap class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span class="text-amber-400 font-medium">小贴士</span>
                    <p class="text-dark-300 text-sm mt-1">{{ step.tip }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 基础配置 -->
        <div v-if="activeTab === 'config'" class="space-y-8">
          <div v-for="(guide, index) in ide.configGuides" :key="index" class="glass-card p-6">
            <h4 class="text-xl font-semibold text-white mb-3">{{ guide.title }}</h4>
            <p class="text-dark-300 mb-4">{{ guide.description }}</p>
            
            <div class="space-y-3">
              <div 
                v-for="(step, stepIndex) in guide.steps" 
                :key="stepIndex"
                class="flex items-start gap-4"
              >
                <span class="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 font-semibold text-sm flex-shrink-0">
                  {{ stepIndex + 1 }}
                </span>
                <span class="text-dark-200">{{ step }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 使用教程 -->
        <div v-if="activeTab === 'tutorial'" class="space-y-6">
          <div 
            v-for="(video, index) in ide.tutorialVideos" 
            :key="index"
            class="glass-card overflow-hidden"
          >
            <div class="aspect-video bg-dark-800 relative">
              <iframe 
                :src="video.embedUrl"
                class="absolute inset-0 w-full h-full"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-2">
                <h4 class="text-lg font-semibold text-white">{{ video.title }}</h4>
                <span 
                  class="px-2 py-1 rounded-full text-xs"
                  :class="{
                    'bg-emerald-500/20 text-emerald-400': video.level === '入门',
                    'bg-amber-500/20 text-amber-400': video.level === '进阶',
                    'bg-purple-500/20 text-purple-400': video.level === '高级',
                  }"
                >
                  {{ video.level }}
                </span>
              </div>
              <p class="text-dark-400 text-sm mb-3">{{ video.description }}</p>
              <div class="flex items-center gap-4 text-dark-500 text-sm">
                <span>{{ video.platform === 'bilibili' ? 'B站' : '抖音' }}</span>
                <span>{{ video.duration }}</span>
              </div>
            </div>
          </div>

          <!-- 小贴士 -->
          <div class="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-6">
            <h4 class="text-lg font-semibold text-primary-400 mb-4 flex items-center gap-2">
              <Zap class="w-5 h-5" />
              学习建议
            </h4>
            <ul class="space-y-3">
              <li 
                v-for="(tip, index) in ide.tips" 
                :key="index"
                class="flex items-start gap-3"
              >
                <ChevronRight class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span class="text-dark-300">{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 常见问题 -->
        <div v-if="activeTab === 'faq'" class="space-y-4">
          <div 
              v-for="(faq, index) in faqsWithState" 
              :key="index"
              class="glass-card"
            >
              <button 
                class="w-full px-6 py-4 text-left flex items-center justify-between"
                @click="toggleFaq(index)"
              >
                <div>
                  <span class="text-dark-500 text-xs uppercase tracking-wider mr-3">{{ faq.category }}</span>
                  <span class="text-white font-medium">{{ faq.question }}</span>
                </div>
                <ChevronRight 
                  class="w-5 h-5 text-dark-400 transition-transform duration-300"
                  :class="{ 'rotate-90': faq.isOpen }"
                />
              </button>
              
              <transition name="slide-down">
                <div 
                  v-if="faq.isOpen"
                  class="px-6 pb-6 text-dark-300"
                >
                  {{ faq.answer }}
                </div>
              </transition>
            </div>
        </div>
      </div>

      <!-- 底部导航 -->
      <div class="p-6 border-t border-white/10 flex items-center justify-between bg-dark-900/50">
        <div class="text-dark-400 text-sm">
          系统要求：{{ ide.systemRequirements.os.join(' / ') }} | 内存：{{ ide.systemRequirements.memory }}
        </div>
        <div class="flex gap-3">
          <button 
            v-for="otherIde in getAllIdes().filter(i => i.id !== ide.id)" 
            :key="otherIde.id"
            @click="navigateToIde(otherIde.id)"
            class="btn-ghost text-sm"
          >
            查看 {{ otherIde.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
