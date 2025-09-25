'use client'

import { title } from '@/components/primitives'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <>
      <div className="text-small text-gray-700 py-3 px-6 max-w-6xl mx-auto box-border dark:text-dark-text mt-[80px] lg:mt-auto">
        <Link
          href="/"
          title="Mazou Homepage"
          className="hover:text-brand-primary-400"
        >
          {'<'} Retourner à l'acceuil
        </Link>
      </div>
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
                {/* <Input
                  type="password"
                  isRequired
                  label="Mot de passe"
                  size="lg"
                  name="title"
                /> */}
                <Input
                  className=""
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-solid outline-transparent"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Mot de Passe"
                  // placeholder="Enter your password"
                  type={isVisible ? 'text' : 'password'}
                  size="lg"
                  name="password"
                  isRequired
                  // variant="bordered"
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
