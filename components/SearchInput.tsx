'use client'

import { SearchIcon } from 'lucide-react'
import { FormEvent, MouseEventHandler } from 'react'
import clsx from 'clsx'
import { mz_button } from '@/components/primitives'
import { cn } from '@/config/utils'
import { Button } from '@heroui/button'

export const SearchInput = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // alert('confirm')
  }
  const handleSearch = (e: MouseEventHandler<HTMLButtonElement>) => {
    alert('search')
  }
  const Link_navbar = ['Santé', 'Alimentation', 'Bien-être', 'Education']
  return (
    <>
      <form
        className="w-full md:w-[700] p-1 rounded-md bg-white flex"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          name="mzs_search"
          className="w-full py-2 px-4 border-none outline-none"
          placeholder="Rechercher un article"
        />
        <button
          type="submit"
          className={cn(
            mz_button({
              bkg: 'secondary',
              hoverText: 'secondary',
              hoverBkg: true,
              border: false,
              radius: 'small',
            }),
            'px-4 h-10 box-border flex justify-center items-center hover:bg-brand-primary-400 focus:bg-brand-primary-400',
          )}
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </form>
      <div className="flex gap-1 items-center justify-center mt-2 w-full flex-wrap">
        {Link_navbar.map((link, index) => (
          <Button
            key={index}
            // onClick={handleSearch}
            className={clsx(
              mz_button({
                hoverText: 'secondary',
                hoverBkg: true,
                border: true,
              }),
              'px-4 py-2 bg-white/50',
            )}
          >
            {link}
          </Button>
        ))}
      </div>
    </>
  )
}
