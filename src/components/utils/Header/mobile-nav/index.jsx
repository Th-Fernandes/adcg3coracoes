import globalHeaderStyle from "./mobile-nav.module.scss";
import { XCircle, List } from "phosphor-react";
import { useState } from "react";

export function MobileNavGlobalHeader({ showApplicationRoutes }) {
  const [isMenuShowed, setIsMenuShowed] = useState(false)


  return (
    <div className={globalHeaderStyle["mobile-ver"]}>
      <List
        onClick={() => setIsMenuShowed(actualState => !actualState)}
        size={48}
        color="#ffffff"
        weight="bold"
      />

      <section className={`${globalHeaderStyle["mobile-modal-menu"]} ${isMenuShowed && globalHeaderStyle["visible"]}`}>
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