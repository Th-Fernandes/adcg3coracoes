import { useState } from "react";
import { GlobalHeader } from "../../utils/Header";
import { GlobalCronograma } from "../../utils/main/cronograma";
import { CultDescriptionCronogramaPage } from "./cult-description";

export function DayCronogramaPage() {
  const [toggleDescriptionByRoute, setToggleDescriptionByRoute] = useState()
  
  return (
    <>
      <GlobalHeader/>

      <main>
        <CultDescriptionCronogramaPage actualRoute={toggleDescriptionByRoute}/>
        <GlobalCronograma onChangeRoute={setToggleDescriptionByRoute} />
      </main>
    </>
  )
}