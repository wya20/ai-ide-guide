<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronRight, ExternalLink, Github, Star, Copy, Check, Zap, Download, Settings, Play, HelpCircle } from 'lucide-vue-next'
import type { TabType } from '@/types'
import useIdes from '@/composables/useIdes'

const route = useRoute()
const router = useRouter()
const { getAllIdes, getIdeById } = useIdes()

const activeTab = ref<TabType>('install')
const copiedCommand = ref<string | null>(null)

const ide = computed(() => {
  const ideId = route.params.id as string
  return getIdeById(ideId)
})

const tabs = [
  { key: 'install' as TabType, label: '安装部署', icon: Download },
  { key: 'config' as TabType, label: '基础配置', icon: Settings },
  { key: 'tutorial' as TabType, label: '使用教程', icon: Play },
  { key: 'faq' as TabType, label: '常见问题', icon: HelpCircle },
]

const allIdes = computed(() => getAllIdes())

// 为FAQ添加isOpen状态
const faqsWithState = computed(() => {
  if (!ide.value) return []
  return ide.value.faqs.map(faq => ({
    ...faq,
    isOpen: false
  }))
})

const toggleFaq = (index: number) => {
  faqsWithState.value[index].isOpen = !faqsWithState.value[index].isOpen
}

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
  const targetIde = getAllIdes().find(i => i.id === ideId)
  if (targetIde) {
    router.push({ name: 'detail', params: { id: ideId } })
  }
}

const goBack = () => {
  router.push('/')
}

onMounted(() => {
  // 移除禁止滚动的设置
})

onUnmounted(() => {
  // 移除恢复滚动的设置
})
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- 返回按钮 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button 
        @click="goBack"
        class="inline-flex items-center gap-2 text-dark-400 hover:text-white transition-colors duration-300"
      >
        <ChevronRight class="w-5 h-5 rotate-180" />
        <span>返回首页</span>
      </button>
    </div>

    <!-- 404状态 -->
    <div v-if="!ide" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div class="w-24 h-24 mx-auto mb-8 bg-dark-800 rounded-full flex items-center justify-center">
        <Zap class="w-12 h-12 text-primary-400" />
      </div>
      <h1 class="text-4xl font-bold text-white mb-4">未找到该工具</h1>
      <p class="text-dark-400 mb-8">你访问的工具页面不存在，请返回首页选择其他工具。</p>
      <button @click="goBack" class="btn-primary">
        返回首页
      </button>
    </div>

    <!-- IDE详情 -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <!-- 头部 -->
      <div 
        class="relative rounded-3xl overflow-hidden mb-8"
        :style="{ background: ide.gradient }"
      >
        <div class="absolute inset-0 bg-black/20"></div>
        
        <div class="relative p-8 md:p-12">
          <div class="flex flex-col md:flex-row md:items-start gap-6">
            <!-- 图标 -->
            <div 
              class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
            >
              <Star class="w-14 h-14 md:w-16 md:h-16 text-white" />
            </div>

            <!-- 信息 -->
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-3xl md:text-4xl font-bold text-white">{{ ide.name }}</h1>
                <span 
                  class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
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
                <button class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300">
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
              class="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
            >
              {{ feature }}
            </span>
          </div>
        </div>

        <!-- 系统要求 -->
        <div class="relative px-8 pb-6 flex flex-wrap gap-4 text-sm text-white/70">
          <div class="flex items-center gap-2">
            <span class="text-white/50">系统：</span>
            <span>{{ ide.systemRequirements.os.join(' / ') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-white/50">内存：</span>
            <span>{{ ide.systemRequirements.memory }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-white/50">存储：</span>
            <span>{{ ide.systemRequirements.storage }}</span>
          </div>
        </div>
      </div>

      <!-- Tab导航 -->
      <div class="flex border-b border-white/10 overflow-x-auto mb-8">
        <button 
          v-for="tab in tabs" 
          :key="tab.key"
          class="tab-item flex items-center gap-2"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <component :is="tab.icon" class="w-4 h-4" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab内容 -->
      <div class="min-h-[400px] overflow-y-auto">
        <!-- 安装部署 -->
        <div v-if="activeTab === 'install'" class="space-y-8">
          <div v-for="(step, index) in ide.installSteps" :key="index" class="flex gap-6">
            <div class="step-number flex-shrink-0">{{ index + 1 }}</div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h3>
              <p class="text-dark-300 mb-4">{{ step.description }}</p>
              
              <div v-if="step.command" class="bg-dark-800 rounded-xl p-4 mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-dark-400 text-sm">命令</span>
                  <button 
                    @click="copyCommand(step.command)"
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
            <h3 class="text-xl font-semibold text-white mb-3">{{ guide.title }}</h3>
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

      <!-- 其他工具推荐 -->
      <div class="mt-16 pt-8 border-t border-white/10">
        <h3 class="text-xl font-semibold text-white mb-6">其他AI编程工具</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            v-for="otherIde in allIdes.filter(i => i.id !== (ide?.id || ''))" 
            :key="otherIde.id"
            @click="navigateToIde(otherIde.id)"
            class="glass-card-hover p-4 text-left"
          >
            <div class="flex items-center gap-3">
              <div 
                class="w-10 h-10 rounded-xl flex items-center justify-center"
                :style="{ background: otherIde.gradient }"
              >
                <Star class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="font-medium text-white">{{ otherIde.name }}</div>
                <div class="text-xs text-dark-400">{{ otherIde.difficultyText }}</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
