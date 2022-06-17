
import landingPageStyles from "../../assets/styles/scss/landingPage.module.scss";
import { GlobalHeader } from "../utils/Header";

export function LandingPage() {
  return (
    <>
      <GlobalHeader/>

      <main>
        <section className={landingPageStyles['sobre-nos-card']}>
          <h2> SOMOS A ADCG - CONGREGAÇÃO 3 CORAÇÕES </h2>

          <button className={landingPageStyles["default-light-button"]}>
            Conheça mais sobre nós
          </button>
        </section>

        <section className={landingPageStyles["guia-novo-convertido"]}>
          <div className={landingPageStyles["section-container"]}>
            <h2>Guia do novo convertido</h2>
            <p>
              Deseja criar bases firmes com Deus na sua
              vida mas não sabe por onde começar? Nós
              temos um guia perfeito para te auxiliar!
            </p>

            <button>acesse aqui</button>
          </div>
        </section>

        <section className={landingPageStyles["cronograma-semana"]}>
          <div className={landingPageStyles["section-container"]}>
            <h2>Cronograma da semana</h2>

            <ul className={landingPageStyles["culto-dias"]}>
              <li className={landingPageStyles["culto-dia"]}>
                <article className={landingPageStyles["descricao-culto"]}>
                  <h3>QUARTA</h3>
                  <p>culto de ensino</p>

                  <button>saiba mais</button>
                </article>
              </li>
              <li className={landingPageStyles["culto-dia"]}>
                <article className={landingPageStyles["descricao-culto"]}>
                  <h3>SEXTA</h3>
                  <p>culto da vitória</p>

                  <button>saiba mais</button>
                </article>
              </li>
              <li className={landingPageStyles["culto-dia"]}>
                <article className={landingPageStyles["descricao-culto"]}>
                  <h3>SÁBADO</h3>
                  <p>culto de libertação</p>

                  <button>saiba mais</button>
                </article>
              </li>
              <li className={landingPageStyles["culto-dia"]}>
                <article className={landingPageStyles["descricao-culto"]}>
                  <h3>Domingo (manhã)</h3>
                  <p>EBD</p>

                  <button>saiba mais</button>
                </article>
              </li>
              <li className={landingPageStyles["culto-dia"]}>
                <article className={landingPageStyles["descricao-culto"]}>
                  <h3>Domingo (noite)</h3>
                  <p>culto de adoração</p>

                  <button>saiba mais</button>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>
  </>
  )
}