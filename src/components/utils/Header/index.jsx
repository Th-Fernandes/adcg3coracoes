import { MobileNavGlobalHeader } from "./mobile-nav";
import { DesktopNavGlobalHeader } from "./desktop-nav";
import headerLogo from "../../../../public/img/ADCG - LOGO.svg";
import globalHeaderStyle from "./header.module.scss";

export function GlobalHeader() {
  function showApplicationRoutes() {
    const navegacaoAplicacao = [ 
      'Guia do novo convertido',
      'Quem somos',
      'Louvores'
    ]

    return (
      navegacaoAplicacao.map((rota, index) => (
        <li key={index}>
          <a href="#">{rota}</a>
        </li>
      ))
    )
  }

  return (

    <header className={globalHeaderStyle["main-header"]}>
      <div className={globalHeaderStyle["header-container"]}>
        <h1>
          <img src={headerLogo.src} alt="Voltar ao menu principal" />
        </h1>

        <MobileNavGlobalHeader showApplicationRoutes={showApplicationRoutes} />

        <DesktopNavGlobalHeader showApplicationRoutes={showApplicationRoutes} />
      </div>
    </header>
  )
}
