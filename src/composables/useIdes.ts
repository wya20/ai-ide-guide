
import type { IDE } from '@/types'

const idesData: IDE[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    shortDesc: 'Anthropic官方出品的命令行AI编程助手',
    fullDesc: 'Claude Code是Anthropic公司推出的官方AI编程工具，提供强大的代码生成、调试和重构能力。通过命令行界面与开发者深度集成，支持多种编程语言和框架。',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    gradientText: 'from-amber-400 to-amber-600',
    icon: 'Claude',
    difficulty: 'intermediate',
    difficultyText: '进阶级',
    officialWebsite: 'https://claude.com/claude-code',
    github: 'https://github.com/anthropics/claude-code',
    features: [
      '强大的代码生成能力',
      '多语言支持',
      '命令行深度集成',
      '代码审查和重构',
      '项目级上下文理解',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 8GB 以上',
      storage: '需要 500MB 可用空间',
    },
    installSteps: [
      {
        title: '系统要求检查',
        description: '确保你的系统满足以下要求：支持 macOS、Linux 和 Windows WSL，需要 Node.js 18+ 或 Python 3.11+。',
        tip: '在终端输入 node -v 或 python3 --version 来检查版本',
      },
      {
        title: '安装Claude Code CLI',
        description: '使用npm全局安装或通过官方安装脚本安装。',
        command: 'npm install -g @anthropic-ai/claude-code',
        tip: '如果遇到权限问题，请使用 sudo 或管理员权限',
      },
      {
        title: '配置API密钥',
        description: '需要配置 Anthropic API Key 才能使用服务。访问 Anthropic Console 创建并获取你的API Key。',
        command: 'export ANTHROPIC_API_KEY="your-api-key-here"',
        tip: '也可以在项目根目录创建 .env 文件保存密钥',
      },
      {
        title: '验证安装',
        description: '运行以下命令验证安装是否成功。',
        command: 'claude --version',
      },
    ],
    configGuides: [
      {
        title: '设置默认模型',
        description: '你可以在配置文件中指定默认使用的Claude模型，以获得最佳性能体验。',
        steps: [
          '创建或编辑 ~/.claude/settings.json 文件',
          '添加 "model": "claude-sonnet-4-20250514" 配置项',
          '保存文件后重启Claude Code',
        ],
      },
      {
        title: '配置代理（如需要）',
        description: '在网络受限环境下，可能需要配置代理才能正常使用API。',
        steps: [
          '设置环境变量 HTTPS_PROXY 或 HTTP_PROXY',
          '示例：export HTTPS_PROXY="http://127.0.0.1:7890"',
          '确保代理服务器允许访问 Anthropic API',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'Claude Code 入门教程',
        description: '从零开始学习Claude Code的基础使用方法，包括安装配置和基本操作。',
        platform: 'bilibili',
        videoId: 'BV1aWqZBkEYR',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1aWqZBkEYR',
        duration: '15:32',
        level: '入门',
      },
      {
        title: 'Claude Code 高级技巧',
        description: '深入了解Claude Code的高级功能，包括项目分析和代码重构。',
        platform: 'bilibili',
        videoId: 'BV1aWqZBkEYR',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1aWqZBkEYR',
        duration: '25:18',
        level: '进阶',
      },
    ],
    faqs: [
      {
        question: 'Claude Code是免费的吗？',
        answer: 'Claude Code提供免费试用额度，超出后需要付费使用。具体的定价可以在官方网站查看。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: 'Claude Code支持几乎所有主流编程语言，包括但不限于Python、JavaScript、TypeScript、Java、C++、Go、Rust等。',
        category: '功能',
      },
      {
        question: '如何获得更好的代码生成效果？',
        answer: '提供清晰的上下文和具体的需求描述，使用项目代码结构信息，可以显著提升生成质量。',
        category: '使用技巧',
      },
    ],
    tips: [
      '使用项目根目录的CLAUDE.md文件可以给AI提供项目背景信息',
      '定期清理对话历史可以保持响应速度',
      '结合版本控制工具可以获得更好的代码对比体验',
    ],
  },
  {
    id: 'trae',
    name: 'Trae',
    shortDesc: '字节跳动开源的AI代码编辑器',
    fullDesc: 'Trae是字节跳动推出的开源AI编程工具，专注于为中国开发者提供流畅的编程体验。支持智能代码补全、项目级分析和AI对话功能。',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    gradientText: 'from-blue-400 to-blue-600',
    icon: 'Trae',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://trae.ai',
    github: 'https://github.com/bytecode-alliance/trae',
    features: [
      '智能代码补全',
      'AI代码生成',
      '项目结构分析',
      '中文界面支持',
      'VS Code插件兼容',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 300MB 可用空间',
    },
    installSteps: [
      {
        title: '下载安装包',
        description: '访问Trae官方网站或GitHub releases页面，下载适合你操作系统的安装包。',
        tip: 'Windows用户下载.exe安装包，macOS用户下载.dmg镜像',
      },
      {
        title: '运行安装程序',
        description: '双击下载的安装包，按照提示完成安装过程。',
        tip: '首次启动可能需要几分钟进行初始配置',
      },
      {
        title: '配置AI服务',
        description: 'Trae需要连接AI服务才能使用AI功能。你可以使用内置服务或配置自己的API。',
        tip: '在设置中可以切换不同的AI服务提供商',
      },
      {
        title: '安装扩展（可选）',
        description: '从扩展市场安装你需要的编程语言支持和工具扩展。',
        tip: 'Trae兼容大部分VS Code扩展',
      },
    ],
    configGuides: [
      {
        title: '切换AI模型',
        description: '在设置中可以切换不同的AI模型，不同模型在性能和特点上有所差异。',
        steps: [
          '打开设置（Ctrl+,）',
          '搜索"AI模型"或"Model"',
          '选择你需要的模型',
          '重启编辑器使设置生效',
        ],
      },
      {
        title: '配置快捷键',
        description: 'Trae允许自定义大部分快捷键，以适应不同用户的使用习惯。',
        steps: [
          '打开设置 → 快捷键设置',
          '搜索你想要修改的操作',
          '点击现有的快捷键进行修改',
          '保存设置',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'Trae 官方入门教程',
        description: 'Trae官方发布的入门视频，带你快速了解基本功能和使用方法。',
        platform: 'bilibili',
        videoId: 'BV1LFa2zQEjU',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1LFa2zQEjU',
        duration: '12:45',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: 'Trae完全免费吗？',
        answer: '是的，Trae是完全开源免费的工具，没有付费计划或功能限制。',
        category: '费用',
      },
      {
        question: '如何配置自定义API？',
        answer: '在设置中找到AI服务配置选项，可以添加自定义的API端点和密钥。',
        category: '配置',
      },
      {
        question: '支持中文吗？',
        answer: '是的，Trae原生支持中文界面和中文代码注释理解。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Ctrl+J 可以快速呼出AI对话面板',
      'Trae支持拖拽文件夹到窗口直接打开项目',
      '内置终端可以让你在不离开编辑器的情况下运行命令',
    ],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    shortDesc: 'AI原生的代码编辑器，基于VS Code',
    fullDesc: 'Cursor是一款以AI为核心的现代代码编辑器，基于VS Code构建但深度集成AI功能。提供代码生成、编辑、重构和调试等全方位AI辅助功能。',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    gradientText: 'from-purple-400 to-purple-600',
    icon: 'Cursor',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://cursor.sh',
    github: 'https://github.com/cursor-ai/cursor',
    features: [
      'AI原生编辑器',
      '代码生成和编辑',
      '项目级上下文理解',
      '聊天式编程',
      'VS Code插件兼容',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 8GB 以上',
      storage: '需要 1GB 可用空间',
    },
    installSteps: [
      {
        title: '下载安装包',
        description: '访问Cursor官网下载适合你操作系统的安装包。支持Windows、macOS和Linux。',
        tip: 'macOS用户也可以通过 Homebrew 安装：brew install cursor',
      },
      {
        title: '安装并启动',
        description: '运行安装包完成安装，首次启动会进行初始化配置。',
        tip: '首次启动可能需要下载语言包，请耐心等待',
      },
      {
        title: '登录账户',
        description: '注册并登录Cursor账户以使用AI功能。新用户有免费额度。',
        tip: '可以使用GitHub或Google账户快速登录',
      },
      {
        title: '配置API密钥（可选）',
        description: '如果需要使用自己的API，可以在设置中配置OpenAI或其他兼容API的密钥。',
        tip: '使用自己的API可以避免额度限制',
      },
    ],
    configGuides: [
      {
        title: '设置AI模型',
        description: 'Cursor支持多个AI模型版本，你可以根据需要选择不同版本的模型。',
        steps: [
          '打开 Cursor Settings',
          '找到 AI Options 部分',
          '选择 General、Claude 3.5 或 Claude 3 Opus',
          '部分模型需要 Plus 订阅',
        ],
      },
      {
        title: '配置快捷键',
        description: 'Cursor的快捷键和VS Code类似，但增加了AI相关的快捷操作。',
        steps: [
          'Ctrl+K：生成代码',
          'Ctrl+L：打开AI对话',
          'Ctrl+I：编辑选中的代码',
          '可以在设置中自定义这些快捷键',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'Cursor 完整入门教程',
        description: '从安装到高级功能，全面介绍Cursor的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1WBG9zgECp',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1WBG9zgECp',
        duration: '30:15',
        level: '入门',
      },
      {
        title: 'Cursor 高级使用技巧',
        description: '深入了解Cursor的高级功能，提升编程效率。',
        platform: 'bilibili',
        videoId: 'BV1WBG9zgECp',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1WBG9zgECp',
        duration: '28:42',
        level: '进阶',
      },
      {
        title: 'Cursor 实战项目教程',
        description: '使用Cursor从零开始开发一个完整的项目。',
        platform: 'bilibili',
        videoId: 'BV1WBG9zgECp',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1WBG9zgECp',
        duration: '45:30',
        level: '高级',
      },
    ],
    faqs: [
      {
        question: 'Cursor的免费额度用完了怎么办？',
        answer: '可以升级到Cursor Plus订阅获得更多额度，或者在设置中配置自己的API密钥。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: 'Cursor支持所有主流编程语言，并且可以通过扩展支持更多语言。',
        category: '功能',
      },
      {
        question: '可以导入VS Code的设置吗？',
        answer: '是的，Cursor可以直接导入VS Code的设置、主题和扩展。',
        category: '配置',
      },
      {
        question: '代码会被上传到服务器吗？',
        answer: 'AI功能需要上传代码到服务器处理，但代码安全是Cursor的重点关注领域。',
        category: '安全',
      },
    ],
    tips: [
      '使用 Ctrl+K 可以快速生成或修改代码',
      '使用 @ 符号可以引用项目文件或代码片段',
      '使用 / 命令可以快速调用特定功能',
      '在对话中选中代码可以让AI更好地理解上下文',
    ],
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    shortDesc: '开源社区驱动的AI编程工具',
    fullDesc: 'OpenCode是一个由开源社区驱动的AI编程工具项目，致力于提供透明、可定制的AI编程体验。任何人都可以参与贡献和改进这个项目。',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    gradientText: 'from-emerald-400 to-emerald-600',
    icon: 'OpenCode',
    difficulty: 'advanced',
    difficultyText: '进阶级',
    officialWebsite: 'https://opencode.ai',
    github: 'https://github.com/opencode-ai/opencode',
    features: [
      '完全开源透明',
      '社区驱动开发',
      '高度可定制',
      '本地部署支持',
      '隐私优先设计',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 16GB 以上',
      storage: '需要 2GB 可用空间',
    },
    installSteps: [
      {
        title: '环境准备',
        description: '需要安装Git、Node.js 18+和Python 3.11+。同时需要准备一个API密钥。',
        tip: '可以使用 Docker 简化环境配置',
      },
      {
        title: '克隆仓库',
        description: '从GitHub克隆OpenCode的源代码到本地。',
        command: 'git clone https://github.com/opencode-ai/opencode.git',
        tip: '如果网络受限，可以使用镜像源',
      },
      {
        title: '安装依赖',
        description: '进入项目目录并安装所有必要的依赖包。',
        command: 'cd opencode && npm install',
        tip: '建议使用pnpm代替npm以获得更好的性能',
      },
      {
        title: '运行项目',
        description: '启动开发服务器开始使用OpenCode。',
        command: 'npm run dev',
        tip: '首次运行会自动下载必要的模型文件',
      },
    ],
    configGuides: [
      {
        title: '配置本地模型',
        description: 'OpenCode支持使用本地运行的模型，可以更好地保护隐私。',
        steps: [
          '安装 Ollama 或 LM Studio',
          '下载适合的本地模型',
          '在OpenCode设置中配置本地API地址',
          '重启应用使配置生效',
        ],
      },
      {
        title: '自定义主题',
        description: 'OpenCode的主题系统高度可定制，你可以创建自己的主题。',
        steps: [
          '编辑 src/themes 目录下的主题文件',
          '修改颜色、字体、样式等配置',
          '在设置中选择你创建的主题',
          '也可以提交PR与社区分享你的主题',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'OpenCode 本地部署教程',
        description: '详细讲解如何从源码编译和运行OpenCode。',
        platform: 'bilibili',
        videoId: 'BV1BVrXBUEbR',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1BVrXBUEbR',
        duration: '22:18',
        level: '进阶',
      },
    ],
    faqs: [
      {
        question: 'OpenCode完全免费吗？',
        answer: '是的，OpenCode是完全开源免费的项目，没有任何付费功能。',
        category: '费用',
      },
      {
        question: '如何参与贡献？',
        answer: '可以通过GitHub提交Issue、Pull Request或参与社区讨论来贡献代码。',
        category: '社区',
      },
      {
        question: '支持本地部署吗？',
        answer: '是的，OpenCode支持完全本地部署，不依赖任何云服务。',
        category: '功能',
      },
    ],
    tips: [
      '本地部署可以获得更好的隐私保护和更快的响应速度',
      '参与社区贡献可以获得项目开发的实践经验',
      '查看源码是学习现代AI应用开发的好方法',
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    shortDesc: 'GitHub官方AI代码助手',
    fullDesc: 'GitHub Copilot是GitHub和OpenAI合作开发的AI代码助手，提供智能代码补全、生成和解释功能，支持多种编程语言和编辑器。',
    gradient: 'linear-gradient(135deg, #238636 0%, #1f6f48 100%)',
    gradientText: 'from-green-400 to-green-600',
    icon: 'Copilot',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://github.com/features/copilot',
    features: [
      '智能代码补全',
      '多编辑器支持',
      'GitHub深度集成',
      '代码解释功能',
      '文档生成支持',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 200MB 可用空间',
    },
    installSteps: [
      {
        title: '选择安装方式',
        description: 'GitHub Copilot可以作为VS Code、JetBrains等编辑器的插件安装。',
        tip: '推荐使用VS Code获得最佳体验',
      },
      {
        title: '安装插件',
        description: '在编辑器的扩展市场搜索"GitHub Copilot"并安装。',
        tip: 'VS Code用户可以在扩展面板直接搜索',
      },
      {
        title: '激活和登录',
        description: '安装完成后使用GitHub账号登录并授权Copilot。',
        tip: '需要GitHub账户，Copilot需要单独订阅',
      },
      {
        title: '完成初始设置',
        description: '根据向导完成初始配置，包括选择编程语言和设置偏好。',
        tip: 'Copilot会自动学习你的代码风格',
      },
    ],
    configGuides: [
      {
        title: '调整补全行为',
        description: '可以根据个人偏好调整代码补全的触发方式和显示样式。',
        steps: [
          '打开 VS Code 设置',
          '搜索"GitHub Copilot"',
          '调整补全触发时机和显示选项',
          '配置键盘快捷键',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'GitHub Copilot 快速上手',
        description: '从零开始学习GitHub Copilot的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1ti73zuETg',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1ti73zuETg',
        duration: '10:25',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: 'GitHub Copilot是免费的吗？',
        answer: '需要单独订阅，学生和开源贡献者可以免费使用。',
        category: '费用',
      },
      {
        question: '支持哪些编辑器？',
        answer: '支持VS Code、JetBrains系列、Neovim等主流编辑器。',
        category: '兼容性',
      },
      {
        question: '如何获得最佳的补全效果？',
        answer: '写好注释和函数签名，可以帮助Copilot更好地理解你的需求。',
        category: '使用技巧',
      },
    ],
    tips: [
      '使用 Tab 键接受补全建议',
      '使用 Ctrl+Enter 查看多个补全选项',
      '使用 Copilot Chat 获得代码解释和建议',
    ],
  },
  {
    id: 'baidu-comate',
    name: '文心快码',
    shortDesc: '百度文心大模型驱动的智能编码助手',
    fullDesc: '文心快码是百度基于文心大模型开发的智能编码助手，支持多语言代码生成、补全、解释和修复等功能，帮助开发者提升编码效率。',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    gradientText: 'from-blue-400 to-blue-600',
    icon: 'Comate',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://comate.baidu.com/',
    features: [
      '智能代码补全',
      '代码生成和解释',
      '多语言支持',
      '百度生态集成',
      '本地部署支持',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 300MB 可用空间',
    },
    installSteps: [
      {
        title: '安装方式选择',
        description: '文心快码支持 VS Code、JetBrains 等编辑器插件安装，也可以通过官方网站下载独立应用。',
        tip: '推荐使用编辑器插件方式安装，可以获得更好的集成体验',
      },
      {
        title: '安装插件',
        description: '在编辑器的扩展市场搜索"文心快码"并安装。',
        tip: 'VS Code用户可以在扩展面板直接搜索，JetBrains用户需要在插件市场搜索',
      },
      {
        title: '登录激活',
        description: '安装完成后使用百度账号登录激活文心快码。',
        tip: '新用户注册可以获得额外的使用额度',
      },
      {
        title: '完成设置',
        description: '根据向导完成初始配置，包括选择编程语言和设置偏好。',
        tip: '文心快码会自动学习你的代码风格',
      },
    ],
    configGuides: [
      {
        title: '调整补全设置',
        description: '可以根据个人偏好调整文心快码的补全行为。',
        steps: [
          '打开文心快码设置',
          '调整补全触发时机和显示方式',
          '配置快捷键',
          '设置代码风格偏好',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: '文心快码 入门教程',
        description: '从零开始学习文心快码的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1rooaYVErj',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1rooaYVErj',
        duration: '12:30',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: '文心快码是免费的吗？',
        answer: '提供免费使用额度，超出后需要付费使用。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: '支持几乎所有主流编程语言，包括Python、JavaScript、Java等。',
        category: '功能',
      },
      {
        question: '是否支持离线使用？',
        answer: '目前不支持完全离线使用，需要联网才能使用AI功能。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Ctrl+J 快速呼出文心快码面板',
      '在注释中详细描述需求，可以获得更精准的代码生成',
      '定期更新插件获得最新功能',
    ],
  },
  {
    id: 'codeium',
    name: 'Codeium',
    shortDesc: 'AI驱动的代码智能助手',
    fullDesc: 'Codeium是一款功能强大的AI代码助手，提供智能代码补全、生成、解释和修复功能，支持多种编程语言和编辑器，帮助开发者提升编码效率。',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    gradientText: 'from-cyan-400 to-cyan-600',
    icon: 'Codeium',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://codeium.com/',
    features: [
      '智能代码补全',
      '多语言支持',
      '多编辑器集成',
      '代码解释和注释',
      '代码修复功能',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 200MB 可用空间',
    },
    installSteps: [
      {
        title: '选择安装方式',
        description: 'Codeium可以作为VS Code、JetBrains等编辑器的插件安装。',
        tip: '支持多种编辑器，选择你常用的即可',
      },
      {
        title: '安装插件',
        description: '在编辑器的扩展市场搜索"Codeium"并安装。',
        tip: 'VS Code用户可以在扩展面板直接搜索',
      },
      {
        title: '激活和登录',
        description: '安装完成后使用邮箱注册或登录Codeium账号。',
        tip: '个人用户免费使用，企业需要付费',
      },
      {
        title: '开始使用',
        description: '安装完成后即可开始使用Codeium的代码补全和生成功能。',
        tip: 'Codeium会自动学习你的代码风格',
      },
    ],
    configGuides: [
      {
        title: '调整补全行为',
        description: '可以根据个人偏好调整代码补全的触发方式和显示样式。',
        steps: [
          '打开Codeium设置',
          '调整补全触发时机',
          '配置快捷键',
          '设置代码风格偏好',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'Codeium 快速上手',
        description: '5分钟学会使用Codeium进行代码补全和生成。',
        platform: 'bilibili',
        videoId: 'BV1ch411N7s7',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1ch411N7s7',
        duration: '08:15',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: 'Codeium是免费的吗？',
        answer: '个人用户可以免费使用，企业用户需要付费订阅。',
        category: '费用',
      },
      {
        question: '支持哪些编辑器？',
        answer: '支持VS Code、JetBrains系列、Neovim、Vim等主流编辑器。',
        category: '兼容性',
      },
      {
        question: '是否支持中文？',
        answer: '是的，Codeium支持中文界面和中文注释理解。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Tab 键接受补全建议',
      '在注释中描述需求，可以获得更精准的代码生成',
      '使用 Codeium Chat 获得代码解释和帮助',
    ],
  },
  {
    id: 'tencent-codebuddy',
    name: '腾讯CodeBuddy',
    shortDesc: '腾讯云AI编码助手',
    fullDesc: '腾讯CodeBuddy是腾讯云基于大模型开发的智能编码助手，提供代码生成、补全、解释和修复等功能，帮助开发者提升编码效率。',
    gradient: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
    gradientText: 'from-blue-400 to-blue-600',
    icon: 'CodeBuddy',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://cloud.tencent.com/product/codebuddy',
    features: [
      '智能代码生成',
      '实时代码补全',
      '多语言支持',
      '腾讯云生态集成',
      '单元测试生成',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 300MB 可用空间',
    },
    installSteps: [
      {
        title: '安装插件',
        description: '在VS Code或JetBrains等编辑器的扩展市场搜索"腾讯CodeBuddy"并安装。',
        tip: '推荐使用VS Code获得最佳体验',
      },
      {
        title: '登录激活',
        description: '安装完成后使用腾讯云账号登录激活CodeBuddy。',
        tip: '新用户可以免费体验30天',
      },
      {
        title: '配置API密钥',
        description: '需要配置腾讯云API密钥才能使用完整功能。',
        tip: '在腾讯云控制台创建并获取API密钥',
      },
      {
        title: '完成初始设置',
        description: '根据向导完成初始配置，包括选择编程语言和设置偏好。',
        tip: 'CodeBuddy会自动学习你的代码风格',
      },
    ],
    configGuides: [
      {
        title: '设置代码风格',
        description: '可以根据个人偏好调整CodeBuddy生成的代码风格。',
        steps: [
          '打开CodeBuddy设置',
          '找到"代码风格"选项',
          '选择或自定义代码风格',
          '保存设置并重启编辑器',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: '腾讯CodeBuddy 入门教程',
        description: '从零开始学习腾讯CodeBuddy的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1Ws55zYEmo',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1Ws55zYEmo',
        duration: '10:45',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: 'CodeBuddy是免费的吗？',
        answer: '提供免费试用，超出后需要付费使用。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: '支持Python、JavaScript、Java、C++等主流编程语言。',
        category: '功能',
      },
      {
        question: '是否支持离线使用？',
        answer: '目前不支持离线使用，需要联网才能使用AI功能。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Ctrl+K 快速呼出CodeBuddy面板',
      '结合腾讯云服务使用可以获得更好的集成体验',
      '定期更新插件获得最新功能',
    ],
  },
  {
    id: 'tongyi-lingma',
    name: '通义灵码',
    shortDesc: '阿里云智能编码助手',
    fullDesc: '通义灵码是阿里云基于通义大模型开发的智能编码助手，支持代码生成、补全、解释、修复和智能问答等功能，帮助开发者提升编码效率。',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    gradientText: 'from-amber-400 to-amber-600',
    icon: 'Lingma',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://tongyi.aliyun.com/lingma/',
    features: [
      '智能代码生成',
      '实时代码补全',
      '多语言支持',
      '阿里云生态集成',
      '代码质量分析',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 300MB 可用空间',
    },
    installSteps: [
      {
        title: '安装插件',
        description: '在VS Code或JetBrains等编辑器的扩展市场搜索"通义灵码"并安装。',
        tip: '推荐使用VS Code获得最佳体验',
      },
      {
        title: '登录激活',
        description: '安装完成后使用阿里云账号登录激活通义灵码。',
        tip: '新用户可以免费体验',
      },
      {
        title: '完成配置',
        description: '根据向导完成初始配置，包括选择编程语言和设置偏好。',
        tip: '通义灵码会自动学习你的代码风格',
      },
      {
        title: '开始使用',
        description: '安装完成后即可开始使用通义灵码的各项功能。',
        tip: '使用 Ctrl+K 快速呼出通义灵码面板',
      },
    ],
    configGuides: [
      {
        title: '调整补全设置',
        description: '可以根据个人偏好调整通义灵码的补全行为。',
        steps: [
          '打开通义灵码设置',
          '调整补全触发时机',
          '配置快捷键',
          '设置代码风格偏好',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: '通义灵码 入门教程',
        description: '从零开始学习通义灵码的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1ktSKYQEFz',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1ktSKYQEFz',
        duration: '11:20',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: '通义灵码是免费的吗？',
        answer: '提供免费使用额度，超出后需要付费使用。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: '支持几乎所有主流编程语言，包括Python、JavaScript、Java等。',
        category: '功能',
      },
      {
        question: '是否支持离线使用？',
        answer: '目前不支持离线使用，需要联网才能使用AI功能。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Ctrl+K 可以快速呼出通义灵码面板',
      '在注释中描述你的需求，可以获得更精确的代码生成',
      '定期更新插件可以获得最新功能和性能优化',
    ],
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    shortDesc: '老牌AI编码助手',
    fullDesc: 'Tabnine是一款老牌AI编码助手，支持多种编辑器和编程语言，提供智能代码补全、生成和重构功能，帮助开发者提升编码效率。',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    gradientText: 'from-purple-400 to-purple-600',
    icon: 'Tabnine',
    difficulty: 'beginner',
    difficultyText: '入门级',
    officialWebsite: 'https://www.tabnine.com/',
    github: 'https://github.com/codota/tabnine',
    features: [
      '智能代码补全',
      '多语言支持',
      '多编辑器集成',
      '本地模型支持',
      '代码生成和重构',
    ],
    systemRequirements: {
      os: ['Windows', 'macOS', 'Linux'],
      memory: '推荐 4GB 以上',
      storage: '需要 200MB 可用空间',
    },
    installSteps: [
      {
        title: '安装插件',
        description: '在VS Code、JetBrains等编辑器的扩展市场搜索"Tabnine"并安装。',
        tip: '支持多种编辑器，选择你常用的即可',
      },
      {
        title: '激活和登录',
        description: '安装完成后使用邮箱注册或登录Tabnine账号。',
        tip: '免费版功能有限，高级功能需要订阅',
      },
      {
        title: '完成设置',
        description: '根据向导完成初始配置，包括选择编程语言和设置偏好。',
        tip: 'Tabnine会自动学习你的代码风格',
      },
      {
        title: '开始使用',
        description: '安装完成后即可开始使用Tabnine的代码补全功能。',
        tip: '使用 Tab 键接受补全建议',
      },
    ],
    configGuides: [
      {
        title: '调整补全设置',
        description: '可以根据个人偏好调整Tabnine的补全行为。',
        steps: [
          '打开Tabnine设置',
          '调整补全触发时机',
          '配置快捷键',
          '选择补全模型（本地或云端）',
        ],
      },
    ],
    tutorialVideos: [
      {
        title: 'Tabnine 入门教程',
        description: '从零开始学习Tabnine的使用方法。',
        platform: 'bilibili',
        videoId: 'BV1dv411a73t',
        embedUrl: 'https://player.bilibili.com/player.html?bvid=BV1dv411a73t',
        duration: '09:30',
        level: '入门',
      },
    ],
    faqs: [
      {
        question: 'Tabnine是免费的吗？',
        answer: '提供免费版和付费版，付费版提供更多高级功能。',
        category: '费用',
      },
      {
        question: '支持哪些编程语言？',
        answer: '支持几乎所有主流编程语言，包括Python、JavaScript、Java等。',
        category: '功能',
      },
      {
        question: '是否支持离线使用？',
        answer: '支持本地模型，可以在离线情况下使用基本的补全功能。',
        category: '功能',
      },
    ],
    tips: [
      '使用 Tab 键接受补全建议',
      '使用 Shift+Tab 查看更多补全选项',
      '定期更新插件获得最新功能',
    ],
  },
]

const useIdes = () => {
  const getAllIdes = () => idesData
  
  const getIdeById = (id: string) => {
    return idesData.find(ide => ide.id === id)
  }
  
  const searchIdes = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return idesData.filter(ide => 
      ide.name.toLowerCase().includes(lowerQuery) ||
      ide.shortDesc.toLowerCase().includes(lowerQuery) ||
      ide.features.some(f => f.toLowerCase().includes(lowerQuery))
    )
  }
  
  const getIdesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
    return idesData.filter(ide => ide.difficulty === difficulty)
  }
  
  return {
    getAllIdes,
    getIdeById,
    searchIdes,
    getIdesByDifficulty,
  }
}

export default useIdes
