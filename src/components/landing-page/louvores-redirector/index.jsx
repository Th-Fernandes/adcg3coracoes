import landingPageStyles from "./index.module.scss";
import {useRouter} from "next/router";

export function LouvoresRedirector() {
  const router = useRouter()

  function handleRedirectToLouvoresPage() {
    router.push('/Louvores')
  }

  return (
    <section className={landingPageStyles["guia-novo-convertido"]}>
      <div className={landingPageStyles["section-container"]}>
        <h2>Vem louvar!</h2>
        <p>
          Quer ouvir um bom louvor? recomendamos
          ouvir a playlist selecionada por nós! 
          Ouça aqui os louvores tocados em nossa
          congregação.
        </p>

        <button onClick={handleRedirectToLouvoresPage}>
          acesse aqui
        </button>
      </div>
    </section>
  )
}