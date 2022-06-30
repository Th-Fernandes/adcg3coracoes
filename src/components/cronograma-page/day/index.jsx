import { useState } from "react";
import { GlobalHeader } from "../../utils/Header";
import { GlobalCronograma } from "../../utils/main/cronograma";
import { CultDescriptionCronogramaPage } from "./cult-description";
import { SpeakerDescriptionCronogramaPage } from "./speaker-description";

export function DayCronogramaPage() {
  const [toggleDescriptionByRoute, setToggleDescriptionByRoute] = useState()
  
  return (
    <>
      <GlobalHeader/>

      <main>
        <CultDescriptionCronogramaPage actualRoute={toggleDescriptionByRoute}/>
        <SpeakerDescriptionCronogramaPage/>
        <GlobalCronograma onChangeRoute={setToggleDescriptionByRoute} />
      </main>
    </>
  )
}