import sobreNosStyles from "./index.module.scss";
import organizations  from "components/sobre-nos-page/organizations.json";
import { DefaultCard } from "../../utils/main/DefaultCard";

export function OurGroups() {
const { groups } = organizations

  return (
    <section className={sobreNosStyles["groups-section"]}>
      <h2 className={sobreNosStyles["groups-title"]}>Nossos grupos</h2>
      <p>
        Congregar é essencial! conheça nossos grupos 
        e encontre em qual você mais se encaixa!
      </p>

      <ul className={sobreNosStyles['groups-list']}>
        {
          groups.map(({title, caption}, index) => (
            <DefaultCard title={title} caption={caption} key={index}/>
          ))
        }
      </ul>
    </section>
  )
}