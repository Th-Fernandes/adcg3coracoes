import globalHeaderStyle from "./desktop-nav.module.scss";

export function DesktopNavGlobalHeader({showApplicationRoutes}) {
  return (
    <div className={globalHeaderStyle["desktop-ver"]}>
      <nav>
        <ul>
          {showApplicationRoutes()}
        </ul>
      </nav>
    </div>
  )
}