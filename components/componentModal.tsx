'use client'
import {
  Modal as HeroUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/modal'
import { Button, ButtonProps } from '@heroui/button'
import { Link } from '@heroui/link'
import { ShoppingCart } from 'lucide-react'
import clsx from 'clsx'
import { mz_button } from '@/components/primitives'
import Produits from '../app/dataMazou.json'
import Image from 'next/image'
import { cn, formatPrice } from '@/config/utils'

export const Modal = () => {
  const product = Produits[0]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        // as={Link}
        color="default"
        // href="#"
        variant="flat"
        className={clsx(
          mz_button({
            hoverText: 'secondary',
            hoverBkg: true,
            border: true,
          }),
          'min-w-auto bg-white/50',
        )}
        startContent={<ShoppingCart className="w-4 h-4" />}
        onPress={() => onOpen()}
      >
        <span className="hidden md:block">Panier</span>
      </Button>
      <HeroUIModal
        isOpen={isOpen}
        size="4xl"
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mz_Heading border-b-2 px-0 ml-4">
                Votre Panier
              </ModalHeader>
              <ModalBody>
                <div className="mz_cart space-y-2 h-auto">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex gap-2 py-3 border-b-2 border-gray-300"
                    >
                      <div className="flex items-center px-2">{i + 1}</div>
                      <div className="w-[158px] h-[158px] flex justify-center">
                        <img
                          src={product.img[i]}
                          alt={product.title}
                          width={158}
                          height={158}
                        />
                        {/* <Image
                          alt={product.title}
                          src={product.img[i]}
                          width={158}
                          height={158}
                          className="w-full h-full"
                        /> */}
                      </div>
                      <div className="flex flex-col justify-between gap-4">
                        <div>
                          <div className="">{product.title}</div>
                          <div className="text-small text-gray-700 space-x-2">
                            {product.product_tags.map((tag, i) => (
                              <span
                                key={i}
                                className="underline cursor-default"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-2xl font-bold text-brand-primary-500">
                            {formatPrice(product.new_price)} F
                          </span>
                          <span>Retirer du panier</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter className="gap-10">
                <div className="border-b-2 border-brand-primary-500 flex items-center px-4 py-1 gap-2">
                  <span>TOTAL:</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(Number(product.new_price) * 3)} F
                  </span>
                </div>
                <Button color="primary" onPress={onClose}>
                  Commander
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </HeroUIModal>
    </>
  )
}
