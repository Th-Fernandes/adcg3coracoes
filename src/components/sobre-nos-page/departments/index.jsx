import sobreNosStyles from "./index.module.scss";
import organizations  from "components/sobre-nos-page/organizations.json";
import { DefaultCard } from "../../utils/main/DefaultCard";

export function OurDepartments(){  
const { departments } = organizations

  return (
    <section className={sobreNosStyles['departments-container']}>
      <h2 className={sobreNosStyles['departments-title']}>Nossos departamentos</h2>

      <ul className={sobreNosStyles['departments-list']}>
        {
          departments.map(({title, caption}) => (
            <DefaultCard title={title} caption={caption}/>
          ))
        }
      </ul>
    </section>
  )
}