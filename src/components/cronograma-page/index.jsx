import { useState } from "react";
import { GlobalCronograma } from "components/utils/main/cronograma";
import { CultDescriptionCronogramaPage } from "components/cronograma-page/cult-description";
import { SpeakerDescriptionCronogramaPage } from "components/cronograma-page/speaker-description";

export function DayCronogramaPage() {
  const [toggleDescriptionByRoute, setToggleDescriptionByRoute] = useState()
  
  return (
    <>
      <CultDescriptionCronogramaPage actualRoute={toggleDescriptionByRoute}/>
      <SpeakerDescriptionCronogramaPage/>
      <GlobalCronograma onChangeRoute={setToggleDescriptionByRoute} />
    </>
  )
}