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
