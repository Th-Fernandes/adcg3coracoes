import defaultCardStyles from "./index.module.scss";

export function DefaultCard({color, title, caption}) {
  return (
    <li className={defaultCardStyles["card-container"]}>
      <h3 className={defaultCardStyles["card-title"]}>{title}</h3>
      <p className={defaultCardStyles["card-caption"]}>{caption}</p>
    </li>
  )
}