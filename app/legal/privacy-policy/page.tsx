import { MazouBreadcrumbs } from '@/components/MazouBreadcrumbs'
import { title } from '@/components/primitives'

export default function PrivacyPolicy() {
  return (
    <>
      <MazouBreadcrumbs />
      <div className="mz_container">
        <div className="mz_container-body mz_container-resp h-full">
          <div className="mz_container-bloc">
            <h1 className={title()}>Politique de Confidentialité – Mazou</h1>
            <h2 className="mt-2 font-bold text-gray-700">
              Dernière mise à jour : 28 Septembre 2025
            </h2>
            <div className="mt-4">
              Bienvenue sur Mazou, une plateforme e-commerce dédiée à la
              présentation et la vente de produits au Cameroun. La protection de
              vos données personnelles est une priorité pour nous. Cette
              politique de confidentialité explique comment nous collectons,
              utilisons, stockons et protégeons vos informations lorsque vous
              utilisez notre site ou nos services.
            </div>
          </div>
          <div className="mz_container-bloc space-y-6 mz_privacy">
            <div>
              <p className="title">1. Collecte des données :</p>
              <p className="content">
                Mazou ne demande aucune inscription et ne collecte pas
                d’informations personnelles obligatoires. Les seules données
                éventuellement transmises le sont lors de la prise de contact
                directe entre l’acheteur et le vendeur, en dehors de la
                plateforme. Ces données sont gérées par le vendeur concerné.
              </p>
            </div>

            <div>
              <p className="title">2. Utilisation des cookies :</p>
              <p className="content">
                Comme la plupart des sites web, Mazou peut utiliser des cookies
                pour améliorer la navigation, analyser le trafic et présenter le
                contenu de manière optimale. Vous pouvez désactiver les cookies
                dans les paramètres de votre navigateur si vous le souhaitez.
              </p>
            </div>

            <div>
              <p className="title">3. Responsabilité des vendeurs :</p>
              <p className="content">
                Toute donnée personnelle communiquée par l’acheteur au vendeur
                (nom, téléphone, adresse de livraison, etc.) relève de la
                responsabilité du vendeur. Mazou ne conserve ni ne gère ces
                informations.
              </p>
            </div>

            <div>
              <p className="title">4. Sécurité :</p>
              <p className="content">
                Même si nous ne stockons pas vos informations personnelles, nous
                mettons en place des mesures de sécurité techniques pour assurer
                la protection et la fiabilité de notre site.
              </p>
            </div>

            <div>
              <p className="title">5. Modifications de la politique :</p>
              <p className="content">
                Mazou se réserve le droit de modifier la présente politique de
                confidentialité. Toute mise à jour sera publiée sur cette page
                avec la date correspondante.
              </p>
            </div>

            <div>
              <p className="title">6. Contact :</p>
              <p className="content">
                Pour toute question concernant notre politique de
                confidentialité, vous pouvez nous écrire à :
                <br /> 📧 &nbsp;
                <b>pro.judaempire@gmail.com.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
