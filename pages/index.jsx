import headerLogo from "../public/img/ADCG - LOGO.svg";
import landingPageStyles from "../src/assets/styles/scss/landingPage.module.scss"

export default function LandingPage() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <h1>
            <img src={headerLogo.src} alt="Voltar ao menu principal" />
          </h1>

          <div className="mobile-ver">
            <i className="ph-list-bold open-modal-button" id="toggleModalDisplayButton"></i>

            <section className="mobile-modal-menu">
              <nav className="mobile-nav">
                <ul>
                  <li> <a href="#"> Guia do novo convertido </a> </li>
                  <li> <a href="#"> Quem somos </a> </li>
                  <li> <a href="./src/assets/pages/louvores.html"> Louvores </a> </li>
                </ul>

                <button className="close-modal">
                  <i className="ph-x-circle-fill" id="closeModalButton"></i>
                </button>
              </nav>
            </section>
          </div>

          <div className="desktop-ver">
            <nav>
              <ul>
                <li> <a href="#"> Guia do novo convertido </a> </li>
                <li> <a href="#"> Quem somos </a> </li>
                <li> <a href="./src/assets/pages/louvores.html"> Louvores </a> </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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