const root = document.documentElement
const codeThemes = {
  light: 'github-light',
  dark: 'github-dark',
}

function currentColorMode() {
  return root.classList.contains('dark') ? 'dark' : 'light'
}

function syncCodeTheme() {
  const theme = codeThemes[currentColorMode()]
  document.querySelectorAll<HTMLElement>('.expressive-code').forEach((block) => {
    block.dataset.theme = theme
  })
}

function closePanel(panel: HTMLElement | null) {
  panel?.classList.add('hidden')
}

function togglePanel(panel: HTMLElement | null) {
  panel?.classList.toggle('hidden')
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement

  const langButton = target.closest('[data-lang-menu]')
  const mobileButton = target.closest('[data-mobile-menu]')
  const langPanel = document.querySelector<HTMLElement>('[data-lang-panel]')
  const mobilePanel = document.querySelector<HTMLElement>('[data-mobile-panel]')

  if (langButton) {
    togglePanel(langPanel)
    closePanel(mobilePanel)
    return
  }

  if (mobileButton) {
    togglePanel(mobilePanel)
    closePanel(langPanel)
    return
  }

  if (target.closest('[data-color-mode]')) {
    root.classList.toggle('dark')
    localStorage.setItem('color-mode', root.classList.contains('dark') ? 'dark' : 'light')
    syncCodeTheme()
    return
  }

  if (!target.closest('[data-lang-panel]')) closePanel(langPanel)
  if (!target.closest('[data-mobile-panel]')) closePanel(mobilePanel)
})

syncCodeTheme()
