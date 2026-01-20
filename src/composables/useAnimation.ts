import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observedElements = ref<HTMLElement[]>([])
  const observer = ref<IntersectionObserver | null>(null)

  const observe = (element: HTMLElement) => {
    if (!observer.value) {
      observer.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              observer.value?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )
    }
    observer.value.observe(element)
    observedElements.value.push(element)
  }

  const disconnect = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
      observedElements.value = []
    }
  }

  onUnmounted(() => {
    disconnect()
  })

  return {
    observe,
    disconnect,
  }
}

export function useParallax(speed: number = 0.5) {
  const offset = ref(0)
  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        offset.value = window.scrollY * speed
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    offset,
  }
}

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const handleMouseMove = (event: MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    x,
    y,
  }
}
