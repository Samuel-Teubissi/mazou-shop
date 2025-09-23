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
      // setIsLoadingPage(false);
    }, 200)
  }
  return (
    <div className="btn-trans nav-trans switchDark overflow-hidden text-black/90 dark:text-white">
      <input type="checkbox" onChange={handleDarkMode} id="switchDark" />
      <label
        htmlFor="switchDark"
        className="border border-gray-400 rounded-lg p-1.5 bg-white/50 mz_dark-btn hover:bg-brand-primary-500 hover:text-white hover:border-gray-200"
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
