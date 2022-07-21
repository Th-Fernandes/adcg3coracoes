import { useRouter } from "next/router";
import landingPageStyles from "./index.module.scss";

export function PresentationCard() {
  const nextRouter = useRouter();

  function handleRedirectToInfo() {
    nextRouter.push('/info')
  }

  return (
    <section className={landingPageStyles['sobre-nos-card']}>
      <h2> SOMOS A ADCG - CONGREGAÇÃO 3 CORAÇÕES </h2>

      <button 
        onClick={handleRedirectToInfo}
        className={landingPageStyles["default-light-button"]}>
        Conheça mais sobre nós
      </button>
    </section>
  )
}