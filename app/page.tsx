import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'

import { title, subtitle } from '@/components/primitives'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Produits from './dataMazou.json'
// import Image from 'next/image'
import { SearchIcon } from 'lucide-react'
import { FormEvent } from 'react'
import { SearchInput } from '@/components/SearchInput'
import { cn, formatPrice } from '@/config/utils'
import { mz_button as buttonStyles } from '@/components/primitives'
import { Image } from '@heroui/image'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center box-border gap-4 py-8 px-4 md:py-10 mb-7 md:mb-10">
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

      <div className="h-[1000px] bg-white w-full flex flex-col pt-8 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="uppercase tracking-wide font-bold text-3xl w-2/3 lg:w-[500px] border-b-5 border-brand-primary-500 mb-4 py-1">
            SPORT
          </div>
          <div className="container gap-3 items-center grid grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                {Produits.map((item, index) => (
                  <Card
                    key={index}
                    isPressable
                    // isHoverable
                    shadow="sm"
                    className="w-full hover:bg-brand-primary-400/5 hover:shadow-lg"
                    title={item.title}
                  >
                    <CardBody className="overflow-visible p-0 relative">
                      <Image
                        isZoomed
                        alt={item.title}
                        className="object-cover w-full h-[250]"
                        src={item.img[0]}
                        width={418}
                        height={250}
                      />
                      <div className="absolute flex flex-col top-1/3 gap-1 font-bold text-lg">
                        <span className="py-1 px-6 bg-brand-primary-400/50 w-fit rounded-2xl line-through">
                          {formatPrice(item.old_price)} F
                        </span>
                        <span className="py-2 px-6 bg-brand-primary-500 w-fit rounded-2xl text-white">
                          {formatPrice(item.new_price)} F
                        </span>
                      </div>
                    </CardBody>
                    <CardFooter className="items-center flex flex-col">
                      <div className="pt-3 pb-5 px-2 font-bold">
                        <span className="line-clamp-2">{item.title}</span>
                      </div>
                      <p
                        className={cn(
                          buttonStyles({ hoverText: 'primary' }),
                          'text-sm text-gray-500 uppercase',
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
      </div>
    </>
  )
}
