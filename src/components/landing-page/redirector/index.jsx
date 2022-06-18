import landingPageStyles from "./index.module.scss";
import {useRouter} from "next/router";

export function RedirectorLandingPage() {
  const router = useRouter()

  function handleRedirectToGuiaNovoConvertidoPage() {
    router.push('/Guia-novo-convertido')
  }

  return (
    <section className={landingPageStyles["guia-novo-convertido"]}>
      <div className={landingPageStyles["section-container"]}>
        <h2>Guia do novo convertido</h2>
        <p>
          Deseja criar bases firmes com Deus na sua
          vida mas não sabe por onde começar? Nós
          temos um guia perfeito para te auxiliar!
        </p>

        <button onClick={handleRedirectToGuiaNovoConvertidoPage}>
          acesse aqui
        </button>
      </div>
    </section>
  )
}