import { DefaultCard } from "../../utils/main/DefaultCard";
import sobreNosStyles from "./index.module.scss";

export function DepartmentsSobreNosPage(){
  const departmentsData = [
    {title: 'Departamento de', caption: 'evangelismo'},
    {title: 'Departamento da', caption: 'familia'},
    {title: 'Departamento dos', caption: 'novos concedidos'},
    {title: 'Departamento de', caption: 'missões'},
    {title: 'Conselho diaconal', caption: ''},
    {title: 'Libertação', caption: ''},
  ]
  
  return (
    <section className={sobreNosStyles['departments-container']}>
      <h2 className={sobreNosStyles['departments-title']}>Nossos departamentos</h2>
      <p></p>

      <ul className={sobreNosStyles['departments-list']}>
        {
          departmentsData.map(({title, caption}) => (
            <DefaultCard title={title} caption={caption}/>
          ))
        }
      </ul>
    </section>
  )
}