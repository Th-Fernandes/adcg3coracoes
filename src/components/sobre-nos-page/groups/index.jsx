import sobreNosStyles from "./index.module.scss"
import { DefaultCard } from "../../utils/main/DefaultCard"

export function GroupsSobreNosPage() {
  const groupsData = [
    {title: 'DEPIN', caption: 'grupo infantil'},
    {title: 'CIBE', caption: 'O grupo das mulheres'},
    {title: 'MOCIDADE', caption: 'O grupo dos jovens adultos'},
    {title: 'ADOLESCENTE', caption: 'O grupo dos adolescentes'},
  ]

  return (
    <section className={sobreNosStyles["groups-section"]}>
      <h2>Nossos grupos</h2>
      <p>
        Congregar é essencial! conheça nossos grupos 
        e encontre em qual você mais se encaixa!
      </p>

      <ul className={sobreNosStyles['groups-list']}>
        {
          groupsData.map(({title, caption}) => (
            <DefaultCard title={title} caption={caption}/>
          ))
        }
      </ul>
    </section>
  )
}