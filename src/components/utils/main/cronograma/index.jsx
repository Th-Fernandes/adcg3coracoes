import GlobalCronogramaStyle from './index.module.scss';

export function GlobalCronograma() {
  function showCults() {
    const dadosCultos = [
      {diaSemana: 'QUARTA', tituloCulto: 'círculo de oração', horario: '09:00'},
      {diaSemana: 'QUARTA', tituloCulto: 'culto de ensino', horario: '19:00'},
      {diaSemana: 'SEXTA', tituloCulto: 'culto da vitória	', horario: '19:00'},
      {diaSemana: 'SÁBADO', tituloCulto: 'culto de libertação', horario: '09:00'},
      {diaSemana: 'DOMINGO', tituloCulto: 'escola bíblica dominical', horario: '09:00'},
       {diaSemana: 'DOMINGO - 18hrs', tituloCulto: 'culto de adoração'},
    ]

    return (
      dadosCultos.map(({diaSemana, tituloCulto, horario}, index) => (
        <li className={GlobalCronogramaStyle["culto-dia"]} key={index}>
          <article className={GlobalCronogramaStyle["descricao-culto"]}>
            <h3>{diaSemana}</h3>
            <p>{tituloCulto}</p>
            <small>{horario}</small>

            <button>saiba mais</button>
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