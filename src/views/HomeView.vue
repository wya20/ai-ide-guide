<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  Code2, 
  ChevronRight, 
  Star, 
  Zap, 
  BookOpen, 
  Play,
  Download,
  Settings,
  HelpCircle,
  Search
} from 'lucide-vue-next'
import useIdes from '@/composables/useIdes'
import IdeCard from '@/components/IdeCard.vue'

const router = useRouter()
const route = useRoute()
const { getAllIdes } = useIdes()

const searchQuery = ref((route.query.search as string) || '')
const selectedDifficulty = ref<string>('all')

const allIdes = computed(() => getAllIdes())

const filteredIdes = computed(() => {
  let result = allIdes.value

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(ide => 
      ide.name.toLowerCase().includes(query) ||
      ide.shortDesc.toLowerCase().includes(query) ||
      ide.features.some(f => f.toLowerCase().includes(query))
    )
  }

  if (selectedDifficulty.value !== 'all') {
    result = result.filter(ide => ide.difficulty === selectedDifficulty.value)
  }

  return result
})

const difficultyOptions = [
  { value: 'all', label: '全部难度' },
  { value: 'beginner', label: '入门级' },
  { value: 'intermediate', label: '进阶级' },
  { value: 'advanced', label: '专业级' },
]

const stats = computed(() => ({
  total: allIdes.value.length,
  beginner: allIdes.value.filter(i => i.difficulty === 'beginner').length,
  intermediate: allIdes.value.filter(i => i.difficulty === 'intermediate').length,
  advanced: allIdes.value.filter(i => i.difficulty === 'advanced').length,
}))

const navigateToDetail = (id: string) => {
  router.push({ name: 'detail', params: { id } })
}

const handleSearch = () => {
  router.push({ path: '/', query: { search: searchQuery.value } })
}

// FAQ数据
const faqs = ref([
  { 
    question: '这些AI编程工具安全吗？我的代码会被泄露吗？', 
    answer: '主流AI编程工具都采用了严格的安全措施。代码处理通常在安全的环境中进行，具体的隐私政策可以在官方文档中查阅。对于敏感项目，建议使用本地部署版本或仔细评估后再使用。',
    icon: HelpCircle,
    isOpen: false
  },
  { 
    question: '我需要付费吗？免费额度够用吗？', 
    answer: '大多数工具都提供免费额度，通常足够日常学习和小型项目使用。如果需要更高级的功能或更大用量，可以选择升级到付费计划。Trae等开源工具则完全免费。',
    icon: HelpCircle,
    isOpen: false
  },
  { 
    question: '我是编程新手，能学会使用这些工具吗？', 
    answer: '当然可以！这些工具的设计目标之一就是降低编程门槛。入门级工具如Trae和Cursor都有完善的新手教程，即使没有编程基础也能快速上手。建议从简单的任务开始，逐步深入学习。',
    icon: HelpCircle,
    isOpen: false
  },
  { 
    question: '这些工具会取代程序员吗？', 
    answer: '不会。AI编程工具是助手而非替代品，它们可以帮助提升效率、处理重复工作，但创造性思维、系统设计和复杂问题解决仍然需要人类程序员。掌握AI工具是现代程序员的必备技能。',
    icon: HelpCircle,
    isOpen: false
  },
])

const toggleFaq = (index: number) => {
  router.push({ name: 'faqDetail', params: { index } })
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero区域 -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <!-- 背景动画 -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary-500/20 to-transparent rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <!-- Logo和标题 -->
        <div class="animate-fade-in">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-glow">
              <Code2 class="w-10 h-10 text-white" />
            </div>
            <h1 class="text-4xl md:text-6xl font-bold gradient-text">AI编程导航站</h1>
          </div>
          
          <p class="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto mb-8 text-balance">
            帮助你快速上手最新的AI编程工具
            <br class="hidden md:block" />
            <span class="text-primary-400">Claude Code</span>、
            <span class="text-primary-400">Trae</span>、
            <span class="text-primary-400">Cursor</span>等
          </p>

          <!-- 统计数字 -->
          <div class="flex flex-wrap justify-center gap-8 mb-12">
            <div class="stat-card">
              <div class="stat-value">{{ stats.total }}</div>
              <div class="stat-label">款工具</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ stats.beginner }}</div>
              <div class="stat-label">款入门级</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ stats.intermediate }}</div>
              <div class="stat-label">款进阶级</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ stats.advanced }}</div>
              <div class="stat-label">款专业级</div>
            </div>
          </div>

          <!-- CTA按钮 -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              @click="navigateToDetail('claude-code')"
              class="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <Play class="w-5 h-5" />
              立即开始学习
            </button>
            <a 
              href="#ides"
              class="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <BookOpen class="w-5 h-5" />
              浏览全部工具
            </a>
          </div>
        </div>

        <!-- 滚动提示 -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <ChevronRight class="w-8 h-8 text-dark-400 rotate-[-90deg]" />
        </div>
      </div>
    </section>

    <!-- IDE列表区域 -->
    <section id="ides" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 标题和筛选 -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 class="section-title">选择你的AI编程工具</h2>
            <p class="section-subtitle">
              无论是编程新手还是资深开发者，这里都有适合你的工具
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <!-- 搜索框 -->
            <div class="relative">
              <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input 
                v-model="searchQuery"
                type="text"
                placeholder="搜索工具..."
                class="input-field pl-10 w-48 md:w-64"
                @input="handleSearch"
              />
            </div>

            <!-- 难度筛选 -->
            <select 
              v-model="selectedDifficulty"
              class="input-field py-2 pr-10 appearance-none cursor-pointer select-arrow"
            >
              <option v-for="option in difficultyOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- IDE卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IdeCard 
            v-for="ide in filteredIdes" 
            :key="ide.id"
            :ide="ide"
            @click="navigateToDetail(ide.id)"
          />
        </div>

        <!-- 无结果提示 -->
        <div 
          v-if="filteredIdes.length === 0"
          class="text-center py-20"
        >
          <div class="w-20 h-20 mx-auto mb-6 bg-dark-800 rounded-full flex items-center justify-center">
            <Search class="w-10 h-10 text-dark-500" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">未找到相关工具</h3>
          <p class="text-dark-400">试试其他搜索词或筛选条件</p>
        </div>
      </div>
    </section>

    <!-- 快速入门区域 -->
    <section id="getting-started" class="py-20 bg-dark-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">快速入门指南</h2>
          <p class="section-subtitle mx-auto">
            无论你选择哪款工具，这套入门流程都能帮你快速上手
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in [
              { icon: Download, title: '下载安装', desc: '选择适合你系统的版本，下载并安装' },
              { icon: Settings, title: '基础配置', desc: '配置API密钥和基础设置' },
              { icon: Code2, title: '开始使用', desc: '体验代码补全和生成功能' },
              { icon: Zap, title: '进阶技巧', desc: '学习高级功能，提升开发效率' },
            ]" 
            :key="index"
            class="relative glass-card-hover p-8 text-center"
          >
            <div class="step-number mx-auto mb-6">{{ index + 1 }}</div>
            <component :is="step.icon" class="w-12 h-12 mx-auto mb-4 text-primary-400" />
            <h3 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-dark-400">{{ step.desc }}</p>
            
            <!-- 箭头指示 -->
            <div 
              v-if="index < 3"
              class="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-dark-600"
            >
              <ChevronRight class="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ区域 -->
    <section id="faq" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">常见问题</h2>
          <p class="section-subtitle mx-auto">
            整理了初学者最常遇到的问题，帮助你快速解决困惑
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="glass-card overflow-hidden"
          >
            <button 
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              @click="toggleFaq(index)"
            >
              <div class="flex items-center gap-4">
                <component :is="faq.icon" class="w-6 h-6 text-primary-400 flex-shrink-0" />
                <span class="font-medium text-white">{{ faq.question }}</span>
              </div>
              <ChevronRight 
                class="w-5 h-5 text-dark-400 transition-transform duration-300"
                :class="{ 'rotate-90': faq.isOpen }"
              />
            </button>
            
            <transition name="slide-down">
              <div 
                v-if="faq.isOpen"
                class="px-6 pb-6 ml-10"
              >
                <p class="text-dark-300 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="glass-card p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好开始了吗？
            </h2>
            <p class="text-dark-300 mb-8 max-w-2xl mx-auto">
              选择一款工具，开始你的AI编程学习之旅。
              无论选择哪款，都能帮助你提升编程效率。
            </p>
            <button 
              @click="navigateToDetail('cursor')"
              class="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <Star class="w-5 h-5" />
              从Cursor开始
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
