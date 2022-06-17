import landingPageStyles from "./index.module.scss";

export function PresentationCardLandingPage() {
  return (
    <section className={landingPageStyles['sobre-nos-card']}>
      <h2> SOMOS A ADCG - CONGREGAÇÃO 3 CORAÇÕES </h2>

      <button className={landingPageStyles["default-light-button"]}>
        Conheça mais sobre nós
      </button>
    </section>
  )
}