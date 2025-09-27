import { formatPrice } from '@/config/utils'
import { Link } from '@heroui/link'

export const MazouFooter = () => {
  const mz_Phone = formatPrice(Number(process.env.MAZOU_PHONE))
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center text-center md:text-left py-3 px-5 lg:px-20 pt-14 pb-28 gap-4">
        <div>
          <Link
            // isExternal
            className="flex items-center justify-center md:justify-normal gap-1 text-brand-primary-400"
            href="/"
            title="Mazou Homepage"
          >
            <span className="mr-4">LOGO</span>
            <p className="font-bold hidden md:block">Mazou Shop</p>
          </Link>
          <div>MazouShop - La boutique en un click !</div>
        </div>
        <div className="mz_footer-links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
          <div className="space-y-1 md:col-span-2 lg:col-auto flex flex-col items-center md:items-start">
            <div>Payez facilement avec les services locaux</div>
            <div>
              <img
                src="/images/local_payments.png"
                alt="Logos paiements locaux"
              />
            </div>
            <Link className="flex items-center gap-1">
              <img src="/images/whatsapp-icon.svg" alt="Logo Whatsapp" />
              {mz_Phone}
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-brand-primary-400 mb-1">Liens Utiles</div>
            <Link>Acceuil</Link>
            <Link>Mon panier</Link>
            <Link>Politique de confidentialité</Link>
            <Link>Politique de remboursement</Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-brand-primary-400 mb-1">Catégories</div>
            <Link>Sport</Link>
            <Link>Bien-être et santé</Link>
            <Link>Accessoires</Link>
            <Link>électonique</Link>
          </div>
        </div>
      </div>
      <div className="copyright w-full text-center py-3">Copyright © 2025</div>
    </footer>
  )
}
