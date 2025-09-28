'use client'

import { MazouBreadcrumbs } from '@/components/MazouBreadcrumbs'
import { title } from '@/components/primitives'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const hideButton = (
    <button
      aria-label="Changer la visibilité du mot de passe"
      className="focus:outline-solid outline-transparent focus:ring-blue-500 rounded-lg p-1 in-focus-visible:ring-0"
      type="button"
      onClick={toggleVisibility}
    >
      {isVisible ? (
        <EyeOff className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <Eye className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  )

  return (
    <>
      <MazouBreadcrumbs />
      <div className="mz_container">
        <div className="mz_container-body mz_container-resp h-full">
          <div className="mz_container-bloc">
            <div className="w-full md:w-2/3 lg:w-3/5 mx-auto">
              <h3 className="mz_Heading">Se connecter</h3>
              <form action="/api/article" method="post" className="space-y-2">
                <Input
                  type="text"
                  isRequired
                  label="Nom d'utilisateur"
                  autoFocus
                  size="lg"
                  name="title"
                />
                <Input
                  className=""
                  endContent={hideButton}
                  label="Mot de Passe"
                  type={isVisible ? 'text' : 'password'}
                  size="lg"
                  name="password"
                  isRequired
                />
                <div className="mt-10">
                  <Button type="submit" className="mz_btn-submit" size="lg">
                    Se connecter
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
