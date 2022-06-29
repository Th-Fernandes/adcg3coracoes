import { GlobalHeader } from "../../utils/Header";
import { GlobalCronograma } from "../../utils/main/cronograma";
import { CultDescriptionCronogramaPage } from "./cult-description";

export function DayCronogramaPage() {
  /* 
    verificar o dia da semana pela rota,
    imprimir na tela o dia 
  */

  
  return (
    <>
      <GlobalHeader/>

      <main>
        <CultDescriptionCronogramaPage/>
        <GlobalCronograma />
      </main>
    </>
  )
}