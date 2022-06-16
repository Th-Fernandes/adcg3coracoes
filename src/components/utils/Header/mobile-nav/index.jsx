import globalHeaderStyle from "./mobile-nav.module.scss";
import { XCircle, List  } from "phosphor-react";

export function MobileNavGlobalHeader({showApplicationRoutes}) {
  function handleShowMobileMenu() {
    console.log('??')
  }

  return (
    <div className={globalHeaderStyle["mobile-ver"]}>
      <List 
        onClick={handleShowMobileMenu}
        size={48} 
        color="#ffffff" 
        weight="bold" 
      />

      <section className={globalHeaderStyle["mobile-modal-menu"]}>
        <nav className={globalHeaderStyle["mobile-nav"]}>
          <ul>
            {showApplicationRoutes()}
          </ul>

          <button className={globalHeaderStyle["close-modal"]}>
          <XCircle size={48} color="#ffffff" weight="fill" />
          </button>
        </nav>
      </section>
    </div>
  )
}