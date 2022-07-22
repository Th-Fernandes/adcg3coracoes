import { useRouter } from 'next/router';
import cultsDescription from "data/cults.json";
import GlobalCronogramaStyle from './index.module.scss';

export function GlobalCronograma({onChangeRoute}) {
  const nextRouter = useRouter()

  function showCults() {
    // console.log(Object.entries(cultsDescription))
    const jsonCultsDataToArray = Object.entries(cultsDescription)

    const printData = jsonCultsDataToArray
      .map(([jsonDataName, {title, caption, time}], index) => (
        <li className={GlobalCronogramaStyle["culto-dia"]} key={index}>
           <article className={GlobalCronogramaStyle["descricao-culto"]}>
             <h3>{title}</h3>
             <p>{caption}</p>
             <small>{time}</small>

             <button
               onClick={() => {
                 const dayToLowerCase = jsonDataName.toLowerCase()
                 const removeAccentuation = dayToLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

                 nextRouter.push(`/cronograma/${removeAccentuation}`)
                 
                 const isRouteChanging = onChangeRoute && onChangeRoute(removeAccentuation)
               }}  
             >
               saiba mais
             </button>
           </article>          
         </li>
      ))

    return printData
  }

  

  return (
    <section className={GlobalCronogramaStyle["cronograma-semana"]}>
    <div className={GlobalCronogramaStyle["section-container"]}>
      <h2>Cronograma da semana</h2>

      <ul className={GlobalCronogramaStyle["culto-dias"]}>
        {showCults()}
      </ul>
    </div>
  </section>
  )
}