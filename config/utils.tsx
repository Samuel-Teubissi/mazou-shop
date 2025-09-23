import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fusionne intelligemment les classes Tailwind
 * - clsx permet de gérer les conditions (true/false)
 * - twMerge permet d’éviter les doublons/conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(valuePrice: string | number) {
  const newFormat = Number(valuePrice)
  // return newFormat.toLocaleString('fr-FR', {
  //   style: 'currency',
  //   currency: 'XAF',
  // })
  return newFormat.toLocaleString('fr-FR')
}
