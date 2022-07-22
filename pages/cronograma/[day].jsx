import { useEffect, useState } from "react";
import { GlobalHeader } from "components/utils/Header";
import { DayCronogramaPage } from "components/cronograma-page";

export default function cronogramaPage() {
  const [isUrlValid, setIsUrlValid] = useState(true)

  useEffect(() => {
    const validDays = ['quarta-manha','quarta-noite', 'sexta', 'sabado', 'domingo-manha', 'domingo-noite']
    const getCurrentUrl = window.location.href

    for(let day of validDays) {
      const isUrlValid = getCurrentUrl.endsWith(day)

      if (isUrlValid ) {
        setIsUrlValid(true)
        break
      }
      setIsUrlValid(false)
    }

  }, [])

  return (
    <>
      <GlobalHeader/>

      <main>
        {
          isUrlValid
            ? <DayCronogramaPage/>
            : <h1>url inválida</h1>
        }
      </main>
    </>
  )
}