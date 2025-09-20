import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'

import { title, subtitle } from '@/components/primitives'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Produits from './dataMazou.json'
import Image from 'next/image'
import { SearchIcon } from 'lucide-react'
import { FormEvent } from 'react'
import { SearchInput } from '@/components/SearchInput'
import { cn } from '@/config/utils'
import { mz_button as buttonStyles } from '@/components/primitives'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 px-4 md:py-10 mb-7 md:mb-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Bienvenue sur&nbsp;</span>
          <span className={title({ color: 'red' })}>Mazou&nbsp;</span>
        </div>
        <div className="flex gap-3 text-center px-4 lg:max-w-4xl">
          Plongez dans notre liste d’articles, sélectionnez ceux qui vous
          interresse et passez la commande, TOUT SIMPLEMENT Vous serez redirigé
          sur whatsapp pour discuter avec le fournisseur sur la livraison.
        </div>
        <div className="mt-7">
          <SearchInput />
        </div>
      </section>

      <div className="h-[1000px] bg-white w-full flex flex-col items-center pt-8 overflow-clip">
        <div className="cpntainer flex gap-4 flex-wrap">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              {Produits.map((item, index) => (
                <Card key={index} isPressable shadow="sm" className="w-[370px]">
                  <CardBody className="overflow-visible p-0 relative">
                    <Image
                      alt={item.title}
                      className="object-cover w-[370px] h-[250]"
                      src={item.img[0]}
                      width={370}
                      height={250}
                    />
                    <div className="absolute flex flex-col top-1/3 gap-1 font-black">
                      <span className="py-1 px-6 bg-brand-primary-400 w-fit rounded-2xl line-through">
                        {item.old_price}
                      </span>
                      <span className="py-2 px-6 bg-brand-primary-500 w-fit rounded-2xl text-white">
                        {item.new_price}
                      </span>
                    </div>
                  </CardBody>
                  <CardFooter className="text-small items-center flex flex-col">
                    <div className="pt-3 pb-5">{item.title}</div>
                    <p
                      className={cn(
                        'text-default-500',
                        buttonStyles({ hoverText: 'primary' }),
                      )}
                    >
                      Voir les détails
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
