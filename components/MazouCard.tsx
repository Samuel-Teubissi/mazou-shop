import { Image } from '@heroui/image'
import { cn, formatPrice } from '@/config/utils'
import Produits from '../app/dataMazou.json'
import { Link } from '@heroui/link'
import { mz_button as buttonStyles } from '@/components/primitives'
import { Button } from '@heroui/button'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  title: string
  img: string[]
  new_price: string
  old_price: string
  product_category: string
  product_note: string
  testimonial: string
  description: string
  product_profits: string[]
  product_tags: string[]
  product_caracteristics: string[]
}

export default function MazouCard(props: { Item: Product }) {
  const item = props.Item
  return (
    <div className="w-full border border-transparent mz_trans hover:border-brand-primary-400/50 shadow-small rounded-large text-foreground relative dark:bg-dark-div">
      <div className="absolute flex flex-col top-1/3 -left-2 gap-1 font-bold text-lg z-10">
        <span className="line-through mz_priceBand bg-gray-400/75 text-medium dark:text-black/90">
          {formatPrice(item.old_price)} F
        </span>
        <span className="text-white mz_priceBand bg-brand-primary-400">
          {formatPrice(item.new_price)} F
        </span>
      </div>
      <div className="relative overflow-hidden rounded-t-large z-0">
        <Image
          isZoomed
          alt={item.title}
          radius="none"
          className="object-cover w-full h-[250]"
          src={item.img[0]}
          width={418}
          height={250}
        />
      </div>
      <div className="items-center flex flex-col px-2 py-2 md:px-3 w-full">
        <div className="py-5 md:px-2 font-bold text-center dark:text-dark-text">
          <Link
            href={'/product/' + item.id + '?categorie=' + item.product_category}
            className="text-inherit"
          >
            <span className="line-clamp-2">{item.title}</span>
          </Link>
        </div>
        <div className="flex justify-center">
          <Button className="bg-white/50 mz_dark-btn" variant="bordered">
            <ShoppingCart size={15} />
            <span>Ajouter au panier</span>
          </Button>
        </div>
        {/* <Link
          href={'/product/' + item.id + '?categorie=' + item.product_category}
          className={cn(
            buttonStyles({ hoverText: 'primary' }),
            'text-sm text-gray-500 uppercase',
          )}
        >
          Voir les détails
        </Link> */}
      </div>
    </div>
  )
}
