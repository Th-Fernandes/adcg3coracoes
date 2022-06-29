import { useEffect, useState } from "react"
import cultsDescription from "../../../../data/cults.json"
import cronogramaPageStyles from "./index.module.scss"

export function CultDescriptionCronogramaPage() {
  const [cultInfo, setCultInfo ] = useState({})
  
  
  useEffect(() => {
    const [ nullPath, fatherPath, currentPath ] = window.location.pathname.split('/')
    const getDayByPath = cultsDescription[currentPath]
    console.log(getDayByPath)

    setCultInfo(getDayByPath)

  }, [])
  
  return (
    <section className={cronogramaPageStyles["cult-description-container"]}>
      <article className={cronogramaPageStyles["cult-description-article"]} >
        <h2 className={cronogramaPageStyles["cult-description-title"]}>{cultInfo.title}</h2>
        <span className={cronogramaPageStyles["cult-description-caption"]}>{cultInfo.caption}</span>

        <p className={cronogramaPageStyles["cult-description-description"]}>
          {cultInfo.description}
        </p>  
      </article>
    </section>
  )
}