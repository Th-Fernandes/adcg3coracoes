import speakerInfo from "../../../../data/cults.json";
import cronogramaPageStyles from "./index.module.scss";
import {useRouter} from "next/router"

export function SpeakerDescriptionCronogramaPage() {
  const nextRouter = useRouter()
  const {name, office, description, img} = getSpeakerDataByRoute() 

  function getSpeakerDataByRoute() {
    const currentRoute = nextRouter.query.day
    const speakerData = speakerInfo[currentRoute].speaker
    
    return speakerData
  }


  return (
    <section className={cronogramaPageStyles['speaker-section']}>
      <h2 className={cronogramaPageStyles['speaker']}>Preletor</h2>
      <div className={cronogramaPageStyles["speaker-container"]}>
          <img className={cronogramaPageStyles["speaker-img"]} src={img} alt="" />

          <div className={cronogramaPageStyles["speaker-info"]}>
            <div className={cronogramaPageStyles["speaker-text-container"]}>
              <h3 className={cronogramaPageStyles['speaker-name']}>
                {`${office} ${name}`}
              </h3>
              <p className={cronogramaPageStyles['speaker-description']}>
                {description}
              </p>
            </div>

            <button className={cronogramaPageStyles["speaker-redirector-button"]}>
            Conheça nossa equipe
            </button>
          </div>
      </div>

    </section>
  )
}