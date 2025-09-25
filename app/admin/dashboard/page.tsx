'use client'

import { customCheckbox, title } from '@/components/primitives'
import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'
import { Checkbox } from '@heroui/checkbox'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/config/utils'

export default function BlogPage() {
  const [discountChecked, setDiscountChecked] = useState(false)
  // const handleDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDiscountChecked(event.target.checked)
  // }
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
        <div className="mz_container-body mz_container-resp">
          <div className="mz_container-bloc">
            <h1 className={title()}>Dashboard</h1>
          </div>
          <div className="mz_container-bloc">
            <h3 className="mz_Heading">Ajouter un article</h3>
            <form action="/api/article" method="post" className="space-y-2">
              <Input
                type="text"
                isRequired
                label="Titre"
                autoFocus
                size="lg"
                name="title"
              />
              <Input
                type="number"
                isRequired
                label="Prix"
                size="lg"
                name="price"
                step={100}
              />
              <div className="mx-4 flex flex-col gap-1">
                {/* <input
                  type="checkbox"
                  id="priceDiscount"
                  onChange={handleDiscount}
                  checked={discountChecked}
                />
                <label htmlFor="priceDiscount">Réduction de prix</label> */}
                <Checkbox
                  defaultSelected
                  isSelected={discountChecked}
                  onValueChange={setDiscountChecked}
                  className={customCheckbox()}
                >
                  Réduction de prix
                </Checkbox>
                <Input
                  type="number"
                  isRequired
                  label="Prix Avant Réduction"
                  size="lg"
                  name="title"
                  step={100}
                  isDisabled={!discountChecked}
                />
              </div>
              <Textarea rows={10} label="Description" size="lg"></Textarea>
              <Input
                type="number"
                isRequired
                label="Note Produit"
                size="lg"
                name="title"
                max={5}
                min={1}
              />
              <Input
                type="number"
                isRequired
                label="Nombre d'avis"
                size="lg"
                name="title"
              />
              <hr className="my-6" />
              <Input
                type="text"
                label="Tags du produit"
                size="lg"
                name="title"
              />
              <Input
                type="text"
                label="Avantage du produit"
                size="lg"
                name="title"
              />
              <hr className="my-6" />
              <Input
                type="text"
                label="Caractéristique de produit"
                size="lg"
                name="title"
              />
              <Button
                variant="bordered"
                size="md"
                className="mz_dark-btn"
                startContent={<PlusIcon className="w-4 h-4" />}
              >
                Ajouter
              </Button>
              <hr className="my-6" />
              Images du produit
              <div className="mt-10">
                <Button type="submit" className="mz_btn-submit" size="lg">
                  Ajouter un article
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
