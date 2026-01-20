<script setup lang="ts">
import { ref, computed } from 'vue'
import { Star, ChevronRight } from 'lucide-vue-next'
import type { IDE } from '@/types'

const props = defineProps<{
  ide: IDE
}>()

const isHovered = ref(false)

const difficultyColor = computed(() => {
  const colors = {
    beginner: 'tag-success',
    intermediate: 'tag-warning',
    advanced: 'tag-info',
  }
  return colors[props.ide.difficulty]
})

const difficultyLabel = computed(() => {
  const labels = {
    beginner: '入门',
    intermediate: '进阶',
    advanced: '专业',
  }
  return labels[props.ide.difficulty]
})
</script>

<template>
  <div 
    class="glass-card-hover cursor-pointer group relative overflow-hidden"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="$emit('click')"
  >
    <!-- 背景渐变 -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :style="{ background: ide.gradient }"
    ></div>
    
    <!-- 顶部图标 -->
    <div class="relative p-6 pb-4">
      <div 
        class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
        :style="{ background: ide.gradient }"
      >
        <Star 
          class="w-8 h-8 text-white"
        />
      </div>
      
      <h3 class="text-xl font-bold text-white mb-2 relative z-10">
        {{ ide.name }}
      </h3>
      
      <p class="text-dark-400 text-sm line-clamp-2 relative z-10">
        {{ ide.shortDesc }}
      </p>
    </div>

    <!-- 特性标签 -->
    <div class="px-6 py-2">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="feature in ide.features.slice(0, 3)" 
          :key="feature"
          class="px-2 py-1 text-xs bg-white/5 rounded-lg text-dark-300"
        >
          {{ feature }}
        </span>
      </div>
    </div>

    <!-- 底部信息 -->
    <div class="px-6 py-4 flex items-center justify-between border-t border-white/5">
      <span 
        class="tag text-sm"
        :class="difficultyColor"
      >
        {{ difficultyLabel }}
      </span>
      
      <div class="flex items-center gap-2 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
        <span>了解更多</span>
        <ChevronRight class="w-4 h-4" />
      </div>
    </div>

    <!-- 悬停光效 -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
      style="background: radial-gradient(circle at 50% 0%, white, transparent 70%);"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IdeCard',
})
</script>
