import { GlobalHeader } from "../utils/Header";
import { GlobalCronograma } from "../utils/main/cronograma";


export function CronogramaPage() {
  const toggleDescriptionByRoute = 'quarta-manha'

  return (
    <>
    <GlobalHeader/>

    <main>
      <GlobalCronograma/>
    </main>
  </>
  )
}