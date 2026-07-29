// Click-to-copy for the media library (GIF URLs, emoji shortcodes).
// Downloads are handled natively by <a download> and need no JS here.

let toastEl: HTMLElement | null = null
let toastTimer: number | undefined

function showToast(message: string) {
  if (!toastEl) {
    toastEl = document.createElement('div')
    toastEl.setAttribute('role', 'status')
    toastEl.setAttribute('aria-live', 'polite')
    toastEl.className =
      'pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 translate-y-2 rounded-[var(--radius-control)] bg-foreground px-4 py-2 text-sm font-medium text-background opacity-0 shadow-lg transition-[opacity,transform] duration-200'
    document.body.appendChild(toastEl)
  }
  toastEl.textContent = message
  requestAnimationFrame(() => {
    toastEl?.classList.remove('opacity-0', 'translate-y-2')
  })
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toastEl?.classList.add('opacity-0', 'translate-y-2')
  }, 1600)
}

document.addEventListener('click', async (event) => {
  const trigger = (event.target as HTMLElement).closest<HTMLElement>('[data-copy]')
  if (!trigger) return

  const value = trigger.getAttribute('data-copy') || ''
  const message = trigger.getAttribute('data-toast') || value

  try {
    await navigator.clipboard.writeText(value)
    showToast(message)
  } catch {
    // Fallback for insecure contexts / older browsers.
    const area = document.createElement('textarea')
    area.value = value
    area.setAttribute('readonly', '')
    area.className = 'fixed -left-[9999px] top-0'
    document.body.appendChild(area)
    area.select()
    try {
      document.execCommand('copy')
      showToast(message)
    } catch {
      showToast(value)
    }
    area.remove()
  }
})
