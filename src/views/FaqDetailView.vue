<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, HelpCircle } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const faqIndex = computed(() => parseInt(route.params.index as string) || 0)

// FAQ数据
const faqs = [
  { 
    question: '这些AI编程工具安全吗？我的代码会被泄露吗？', 
    answer: '主流AI编程工具都采用了严格的安全措施。代码处理通常在安全的环境中进行，具体的隐私政策可以在官方文档中查阅。对于敏感项目，建议使用本地部署版本或仔细评估后再使用。',
    icon: HelpCircle,
    category: '安全与隐私'
  },
  { 
    question: '我需要付费吗？免费额度够用吗？', 
    answer: '大多数工具都提供免费额度，通常足够日常学习和小型项目使用。如果需要更高级的功能或更大用量，可以选择升级到付费计划。Trae等开源工具则完全免费。',
    icon: HelpCircle,
    category: '费用'
  },
  { 
    question: '我是编程新手，能学会使用这些工具吗？', 
    answer: '当然可以！这些工具的设计目标之一就是降低编程门槛。入门级工具如Trae和Cursor都有完善的新手教程，即使没有编程基础也能快速上手。建议从简单的任务开始，逐步深入学习。',
    icon: HelpCircle,
    category: '新手指导'
  },
  { 
    question: '这些工具会取代程序员吗？', 
    answer: '不会。AI编程工具是助手而非替代品，它们可以帮助提升效率、处理重复工作，但创造性思维、系统设计和复杂问题解决仍然需要人类程序员。掌握AI工具是现代程序员的必备技能。',
    icon: HelpCircle,
    category: '行业趋势'
  },
]

const currentFaq = computed(() => faqs[faqIndex.value] || faqs[0])

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 面包屑导航 -->
      <button 
        class="flex items-center gap-2 text-dark-400 hover:text-white transition-colors duration-300 mb-8"
        @click="goBack"
      >
        <ArrowLeft class="w-5 h-5" />
        <span>返回常见问题</span>
      </button>

      <!-- FAQ详情卡片 -->
      <div class="glass-card p-8">
        <div class="flex items-center gap-4 mb-6">
          <component :is="currentFaq.icon" class="w-10 h-10 text-primary-400" />
          <div>
            <div class="text-sm text-primary-400 mb-1">{{ currentFaq.category }}</div>
            <h1 class="text-2xl font-bold text-white">{{ currentFaq.question }}</h1>
          </div>
        </div>

        <div class="text-dark-300 leading-relaxed space-y-4">
          <p>{{ currentFaq.answer }}</p>
        </div>
      </div>

      <!-- 相关问题 -->
      <div class="mt-12">
        <h2 class="text-xl font-semibold text-white mb-4">相关问题</h2>
        <div class="space-y-3">
          <div 
            v-for="(faq, index) in faqs.filter((_, i) => i !== faqIndex)" 
            :key="index"
            class="glass-card p-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            @click="router.push({ name: 'faqDetail', params: { index } })"
          >
            <div class="flex items-start gap-3">
              <component :is="faq.icon" class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
              <span class="text-white hover:text-primary-400 transition-colors duration-300">{{ faq.question }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 添加动画效果 */
.glass-card {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>