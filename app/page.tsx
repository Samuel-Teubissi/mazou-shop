import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'

import { title, subtitle } from '@/components/primitives'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Produits from './dataMazou.json'
// import Image from 'next/image'
import { SearchInput } from '@/components/SearchInput'
import { cn, formatPrice } from '@/config/utils'
import { mz_button as buttonStyles } from '@/components/primitives'
import { Image } from '@heroui/image'
import MazouCard from '@/components/MazouCard'

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

      <div className="mz_container">
        <div className="mz_container-body px-3">
          <div className="mz_Heading text-3xl border-b-5">SPORT</div>
          <div className="container gap-3 items-center grid grid-cols-2 md:grid-cols-3">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                {Produits.map((item, index) => (
                  <MazouCard Item={item} key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
