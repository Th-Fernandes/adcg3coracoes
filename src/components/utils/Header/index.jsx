import Link from 'next/link'
import { useRouter } from "next/router";
import { MobileNavGlobalHeader } from "./mobile-nav";
import { DesktopNavGlobalHeader } from "./desktop-nav";
import globalHeaderStyle from "./header.module.scss";
import headerLogo from "../../../../public/img/ADCG - LOGO.svg";

export function GlobalHeader() {
  const router = useRouter()

  function showApplicationRoutes() {
    const navegacaoAplicacao = [ 
      {rout: '/info', title:'Localização'},
      {rout: 'Sobre-nos', title: 'Quem somos'},
      {rout: '/cronograma/domingo-noite', title: 'Cronograma'},
      {rout: '/Louvores', title: 'Louvores'},
    ]

    return (
      navegacaoAplicacao.map(({rout, title}, index) => (
        <li 
          onClick={() => router.push(rout) }
          key={index}
        > 
          <Link href={rout}>{title}</Link>
        </li>
      ))
    )
  }

  return (

    <header className={globalHeaderStyle["main-header"]}>
      <div className={globalHeaderStyle["header-container"]}>
        <h1 onClick={() => router.push('/') }>
          <img src={headerLogo.src} alt="Voltar ao menu principal" />
        </h1>

        <MobileNavGlobalHeader showApplicationRoutes={showApplicationRoutes} />

        <DesktopNavGlobalHeader showApplicationRoutes={showApplicationRoutes} />
      </div>
    </header>
  )
}
