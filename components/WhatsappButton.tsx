'use client'
// WhatsAppButton.jsx
import Link from 'next/link'
import React from 'react'
import { addToast, ToastProvider } from '@heroui/toast'

export default function WhatsAppButton({ message = 'Bonjour !' }) {
  const phone = '237612345678'
  const waAppUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
  const waWebUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent)
    addToast({
      title: 'Chargement de commande',
      description: 'Vous allez être redirigé sur WhatsApp',
      promise: new Promise((resolve) => setTimeout(resolve, 3000)),
    })
    if (!isMobile) {
      window.open(waWebUrl, '_blank', 'noopener')
      return
    }
    // Essayer d'ouvrir l'app
    window.location.href = waAppUrl
    setTimeout(() => {
      // fallback
      window.location.href = waWebUrl
    }, 900)
  }

  return (
    <Link
      href={waWebUrl}
      onClick={handleClick}
      className="mz_trans w-full xl:w-4/5 inline-flex justify-center items-center gap-4 p-3 rounded-2xl bg-green-600 text-white hover:bg-green-700"
      aria-label="Contacter sur WhatsApp"
    >
      Commander sur WhatsApp
      <img src="/images/whatsapp-icon.svg" alt="Logo Whatsapp" />
    </Link>
  )
}
