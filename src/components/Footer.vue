<script setup lang="ts">
import { Github, Mail, Heart } from 'lucide-vue-next'

const footerLinks = {
  tools: [
    { name: 'Claude Code', url: 'https://claude.com/claude-code' },
    { name: 'Trae', url: 'https://trae.ai' },
    { name: 'Cursor', url: 'https://cursor.sh' },
    { name: 'OpenCode', url: 'https://opencode.ai' },
    { name: 'Complit', url: 'https://complit.ai' },
  ],
  resources: [
    { name: '官方文档', url: '#' },
    { name: '视频教程', url: '#' },
    { name: '社区论坛', url: '#' },
    { name: '更新日志', url: '#' },
  ],
  support: [
    { name: '使用帮助', url: '#' },
    { name: '常见问题', url: '#' },
    { name: '反馈建议', url: '#' },
    { name: '联系作者', url: '#' },
  ],
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark-900/50 border-t border-white/5 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- 工具链接 -->
        <div>
          <h3 class="text-white font-semibold mb-4">编程工具</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.tools" :key="link.name">
              <a 
                :href="link.url" 
                target="_blank"
                class="text-dark-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 资源链接 -->
        <div>
          <h3 class="text-white font-semibold mb-4">学习资源</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.resources" :key="link.name">
              <a 
                :href="link.url" 
                class="text-dark-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 支持链接 -->
        <div>
          <h3 class="text-white font-semibold mb-4">帮助支持</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.support" :key="link.name">
              <a 
                :href="link.url" 
                class="text-dark-400 hover:text-primary-400 transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div>
          <h3 class="text-white font-semibold mb-4">联系我们</h3>
          <div class="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank"
              class="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Github class="w-5 h-5 text-dark-400" />
            </a>
            <a 
              href="mailto:contact@example.com"
              class="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Mail class="w-5 h-5 text-dark-400" />
            </a>
          </div>
          <p class="mt-4 text-dark-400 text-sm">
            获取最新AI编程工具资讯
          </p>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="mt-12 pt-8 border-t border-white/5">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-dark-400 text-sm">
            © {{ currentYear }} AI编程导航站. 致力于帮助普通人学习AI编程工具。
          </p>
          <div class="flex items-center gap-2 text-dark-400 text-sm">
            <span>Made with</span>
            <Heart class="w-4 h-4 text-red-500 animate-pulse" />
            <span>for AI Enthusiasts</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
