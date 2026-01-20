export interface IDE {
  id: string
  name: string
  shortDesc: string
  fullDesc: string
  gradient: string
  gradientText: string
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  difficultyText: string
  officialWebsite: string
  github?: string
  features: string[]
  systemRequirements: {
    os: string[]
    memory: string
    storage: string
  }
  installSteps: InstallStep[]
  configGuides: ConfigGuide[]
  tutorialVideos: TutorialVideo[]
  faqs: FAQ[]
  tips: string[]
}

export interface InstallStep {
  title: string
  description: string
  command?: string
  image?: string
  tip?: string
}

export interface ConfigGuide {
  title: string
  description: string
  steps: string[]
  image?: string
}

export interface TutorialVideo {
  title: string
  description: string
  platform: 'bilibili' | 'douyin' | 'youtube'
  videoId: string
  embedUrl: string
  duration: string
  level: '入门' | '进阶' | '高级'
  thumbnail?: string
}

export interface FAQ {
  question: string
  answer: string
  category: string
}

export interface IDEStore {
  favorites: string[]
  completed: string[]
  currentProgress: Record<string, number>
}

export type TabType = 'install' | 'config' | 'tutorial' | 'faq'
