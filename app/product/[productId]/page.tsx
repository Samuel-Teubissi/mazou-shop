import ImageSlider from '@/components/ImageSlider'
import { Card, CardBody } from '@heroui/card'
import { Breadcrumbs, BreadcrumbItem } from '@heroui/breadcrumbs'
import Produits from '../../dataMazou.json'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@heroui/table'
import WhatsAppButton from '@/components/WhatsappButton'
import { marked } from 'marked'
import { Button } from '@heroui/button'

export default async function Page(props: {
  params: Promise<{ productId: string }>
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const product = Produits[0]
  const htmlDescription = marked(product.description)
  const promo = Math.round(
    (Number(product.new_price) * 100) / Number(product.old_price),
  )
  return (
    <>
      <Breadcrumbs underline="always">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>{searchParams.categorie}</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumbs>
      <div className="mz_container">
        <div className="mz_container-body lg:w-5xl xl:w-6xl space-y-4">
          <div className="bg-white p-5 pt-7 uppercase text-xl font-bold">
            {product.title}
          </div>
          <div className="bg-white lg:p-5 space-y-2 flex flex-col lg:flex-row gap-4">
            <div className="w-full md:w-[500] h-[500] flex items-center bg-brand-primary-500/10 mx-auto">
              <ImageSlider />
            </div>
            <div className="container-slider_body grow space-y-4 px-2">
              <div>
                <span className="mz_promotionBand">
                  {product.old_price && 'En promotion !'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-4 md:items-center">
                <span className="text-3xl font-black">
                  {product.new_price} FCFA
                </span>
                <div className="flex gap-2 items-center">
                  <span className="line-through text-lg text-gray-700 order-2 sm:order-1">
                    {product.old_price} F
                  </span>
                  <span className="mz_promotionBand order-1 sm:order-2">
                    -{promo}%
                  </span>
                </div>
              </div>
              <div>
                <WhatsAppButton />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Tags du produit</h3>
                <div className="text-gray-700 flex flex-wrap gap-x-4 gap-y-2 text-small">
                  {product.product_tags.map((tag, i) => (
                    <span key={i} className="underline cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Caractéristiques du Produit</h3>
                <div className="border border-gray-200 w-full xl:w-4/5">
                  {product.product_caracteristics.map((c, i) => (
                    <div key={i} className="odd:bg-brand-primary-400/15 p-4">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mz_container-bloc">
            <h3>Description du Produit</h3>
            <div
              dangerouslySetInnerHTML={{ __html: htmlDescription }}
              className="pb-10"
            />
          </div>
          <div className="mz_container-bloc mz_description">
            <h3>Pourquoi choisir notre produit ?</h3>
            <div>
              {product.product_tags.map((d, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span>
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.95825 11L0.208252 6.24996L1.39575 5.06246L4.95825 8.62496L12.6041 0.979126L13.7916 2.16663L4.95825 11Z"
                        fill="#E44E4E"
                      />
                    </svg>
                  </span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mz_container-bloc">
            <h3>Avis clients</h3>
            <div className="w-full flex flex-col items-center gap-2">
              <div className="text-brand-primary-500 flex items-baseline">
                <span>
                  <svg
                    width="40"
                    height="38"
                    viewBox="0 0 52 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3545 48.7469L14.484 30.9464L0.663086 18.9639L18.9011 17.3961L26 0.605103L33.099 17.3961L51.337 18.9639L37.516 30.9464L41.6455 48.7469L26 39.2972L10.3545 48.7469Z"
                      fill="#841515"
                    />
                  </svg>
                </span>
                <div className="text-4xl">
                  <span className="font-black">{product.product_note}</span>/5
                </div>
              </div>
              <div className="">
                Moyenne sur une base de {product.testimonial} avis
              </div>
              <div>
                <Button variant="bordered">Donner votre avis</Button>
              </div>
            </div>
          </div>
          <div className="mz_container-bloc">
            <h3>Nous avons aussi</h3>
            <div></div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}
