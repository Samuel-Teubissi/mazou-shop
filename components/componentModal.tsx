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

export const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        as={Link}
        color="default"
        href="#"
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
        size="3xl"
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </HeroUIModal>
    </>
  )
}
