import { useEffect, useState } from "react";
import { DayCronogramaPage } from "../../src/components/cronograma-page/day";

export default function () {
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
      {
        isUrlValid
          ? <DayCronogramaPage/>
          : <h1>url inválida</h1>
      }
    </>
  )
}