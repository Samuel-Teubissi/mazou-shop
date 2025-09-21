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

export default async function Page(props: {
  params: Promise<{ productId: string }>
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const product = Produits[0]
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
          <div className="container-slider bg-white lg:p-5 flex flex-col lg:flex-row gap-4">
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
        </div>
      </div>
    </>
  )
}
