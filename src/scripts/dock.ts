document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement

  if (target.closest('[data-back-top]')) window.scrollTo({ top: 0, behavior: 'smooth' })
})
