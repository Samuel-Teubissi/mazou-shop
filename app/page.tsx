import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'
import { button as buttonStyles } from '@heroui/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Produits from './dataMazou.json'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 px-4 md:py-10 pb-7 md:pb-14">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Bienvenue sur&nbsp;</span>
          <span className={title({ color: 'violet' })}>Mazou&nbsp;</span>
        </div>

        <div className="flex gap-3 text-center px-4 lg:max-w-4xl">
          Plongez dans notre liste d’articles, sélectionnez ceux qui vous
          interresse et passez la commande, TOUT SIMPLEMENT Vous serez redirigé
          sur whatsapp pour discuter avec le fournisseur sur la livraison.
        </div>
      </section>

      <div className="h-[1000px] bg-white w-full flex flex-col items-center pt-8 overflow-clip">
        <div className="cpntainer flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              {Produits.map((item, index) => (
                <Card key={index} isPressable shadow="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={item.title}
                      className="w-full object-cover"
                      src={item.img[0]}
                      width={300}
                      height={300}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.new_price}</p>
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
