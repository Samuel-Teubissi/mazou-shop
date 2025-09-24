'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect } from 'react'

export const ButtonDarkMode = () => {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLLabelElement && event.key === 'Enter') {
        const target = event.target as HTMLLabelElement
        if (target.htmlFor) {
          const assiociatedElement = document.getElementById(target.htmlFor)
          assiociatedElement?.click()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  const setThemeApp = (theme: string) => {
    // const theme = props.Theme
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }
  const handleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark')
    setTimeout(() => {
      setThemeApp(isDark ? 'light' : 'dark')
    }, 200)
  }
  return (
    <div className="switchDark overflow-hidden text-black/90 dark:text-white">
      <input type="checkbox" onChange={handleDarkMode} id="switchDark" />
      <label
        htmlFor="switchDark"
        className="border border-gray-400 rounded-lg p-1.5 bg-white/50 mz_dark-btn hover:bg-brand-primary-500 hover:text-white focus:text-white hover:border-gray-200 mz_trans focus:bg-brand-primary-500"
        aria-label="Thème du site"
        role="link"
        tabIndex={0}
      >
        <MoonIcon className="inline dark:hidden" />
        <SunIcon className="hidden dark:inline" />
      </label>
      {/* <label htmlFor="switchDark" className="min-w-fit hidden">
        <span className="inline dark:hidden">Dark Mode</span>
        <span className="hidden dark:inline">Light Mode</span>
      </label> */}
    </div>
  )
}
