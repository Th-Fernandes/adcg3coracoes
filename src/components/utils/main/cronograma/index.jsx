import { useRouter } from 'next/router';
import { useState } from 'react';
import GlobalCronogramaStyle from './index.module.scss';

export function GlobalCronograma({onChangeRoute}) {
  const nextRouter = useRouter()

  function showCults() {
    const dadosCultos = [
      {diaSemana: 'QUARTA', tituloCulto: 'círculo de oração', horario: '09:00'},
      {diaSemana: 'QUARTA', tituloCulto: 'culto de ensino', horario: '19:00'},
      {diaSemana: 'SEXTA', tituloCulto: 'culto da vitória	', horario: '19:00'},
      {diaSemana: 'SÁBADO', tituloCulto: 'culto de libertação', horario: '09:00'},
      {diaSemana: 'DOMINGO', tituloCulto: 'escola bíblica dominical', horario: '09:00'},
       {diaSemana: 'DOMINGO', tituloCulto: 'culto de adoração', horario: '18:00'},
    ]

    return (
      dadosCultos.map(({diaSemana, tituloCulto, horario}, index) => (
        <li className={GlobalCronogramaStyle["culto-dia"]} key={index}>
          <article className={GlobalCronogramaStyle["descricao-culto"]}>
            <h3>{diaSemana}</h3>
            <p>{tituloCulto}</p>
            <small>{horario}</small>

            <button
              onClick={() => {
                const dayToLowerCase = diaSemana.toLowerCase()
                const removeAccentuation = dayToLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

                nextRouter.push(`/cronograma/${removeAccentuation}`)
                onChangeRoute(removeAccentuation)
              }}  
            >
              saiba mais
            </button>
          </article>          
        </li>
      ))
    )
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