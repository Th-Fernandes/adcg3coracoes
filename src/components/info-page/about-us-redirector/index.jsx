import {useRouter} from "next/router";
import InfoStyles from "./index.module.scss";


export default function RedirectorAboutUsInfoPage(){
  const nextRouter = useRouter();

  function handleRedirectToSobreNos() {
    nextRouter.push('/Sobre-nos')
  }

  return (
    <section className={InfoStyles["redirector-section"]}>
      <h2 className={InfoStyles["redirector-title"]}>Já conhece nossa equipe?</h2>

      <div
        onClick={handleRedirectToSobreNos} 
        className={InfoStyles["redirector-card"]}
      >
        <button className={InfoStyles["redirector-button"]}>venha nos conhecer!</button>
      </div>
    </section>
  )
}