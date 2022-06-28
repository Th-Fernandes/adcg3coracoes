import { useEffect, useState } from "react"
import cultsDescription from "../../../../data/cults.json"


export function CultDescriptionCronogramaPage() {
  const [cultInfo, setCultInfo ] = useState({})
  
  
  useEffect(() => {
    const [ nullPath, fatherPath, currentPath ] = window.location.pathname.split('/')
    const getDayByPath = cultsDescription[currentPath]
    console.log(getDayByPath)

    setCultInfo(getDayByPath)

  }, [])
  
  return (
    <section>
      <article>
        <h2>{cultInfo.title}</h2>
        <span>{cultInfo.caption}</span>

        <p>
          {cultInfo.description}
        </p>  
      </article>
    </section>
  )
}