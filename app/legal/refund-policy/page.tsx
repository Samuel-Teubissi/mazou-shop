import { MazouBreadcrumbs } from '@/components/MazouBreadcrumbs'
import { title } from '@/components/primitives'

export default function RefundPolicy() {
  return (
    <>
      <MazouBreadcrumbs />
      <div className="mz_container">
        <div className="mz_container-body mz_container-resp h-full">
          <div className="mz_container-bloc">
            <h1 className={title()}>Politique de Remboursement – Mazou</h1>
            <h2 className="mt-2 font-bold text-gray-700">
              Dernière mise à jour : 28 Septembre 2025
            </h2>
            <div className="mt-4">
              Chez <strong>Mazou</strong>, nous nous engageons à proposer des
              produits de qualité au Cameroun. Cette politique de remboursement
              explique dans quels cas un remboursement ou un échange peut être
              accordé.
            </div>
          </div>
          <div className="mz_container-bloc space-y-6 mz_privacy">
            <div>
              <p className="title">1. Conditions d’éligibilité :</p>
              <p className="content">
                Vous pouvez demander un remboursement ou un échange si :
                <br /> - Le produit livré est endommagé ou défectueux.
                <br /> - Le produit reçu ne correspond pas à la description
                affichée sur Mazou.
                <br /> - Le produit n’a pas été livré.
              </p>
            </div>
            <div>
              <p className="title">2. Procédure de remboursement :</p>
              <p className="content">
                Pour toute demande de remboursement :
                <br /> 1. Contactez-nous directement par e-mail dans un délai
                maximum de <strong>48 heures</strong> après réception du
                produit.
                <br /> 2. Fournissez une preuve (photo ou vidéo) en cas de
                produit défectueux ou non conforme.
                <br /> 3. Une solution vous sera proposée après une vérification
                au préalable.
              </p>
            </div>
            <div>
              <p className="title">3. Délais de traitement :</p>
              <p className="content">
                Une fois la demande validée, le remboursement ou l’échange est
                traité dans un délai de <strong>7 à 14 jours ouvrables</strong>.
                Le délai peut varier selon le mode de paiement utilisé.
              </p>
            </div>
            <div>
              <p className="title">4. Limitations :</p>
              <p className="content">
                Aucun remboursement ne sera accordé si :
                <br /> - Le produit a été utilisé ou endommagé après livraison.
                <br /> - La demande est faite au-delà du délai de 48 heures
                suivant la réception.
                <br /> - La réclamation est jugée abusive ou infondée.
              </p>
            </div>
            <div>
              <p className="title">5. Contact :</p>
              <p className="content">
                Pour toute demande de remboursement ou d’échange, veuillez nous
                contacter à :
                <br /> 📧 &nbsp;
                <b>pro.judaempire@gmail.com.</b>
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
