import { useRouter } from "next/router";
import landingPageStyles from "./index.module.scss";

export function PresentationCardLandingPage() {
  const nextRouter = useRouter();

  return (
    <section className={landingPageStyles['sobre-nos-card']}>
      <h2> SOMOS A ADCG - CONGREGAÇÃO 3 CORAÇÕES </h2>

      <button 
        onClick={() => nextRouter.push('/info')}
        className={landingPageStyles["default-light-button"]}>
        Conheça mais sobre nós
      </button>
    </section>
  )
}