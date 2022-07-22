import speakerInfo from "data/cults.json";
import cronogramaPageStyles from "./index.module.scss";
import {useRouter} from "next/router";
import Link from "next/link";

export function SpeakerDescriptionCronogramaPage() {
  const nextRouter = useRouter()
  const {name, office, description, img} = getSpeakerDataByRoute() 

  function getSpeakerDataByRoute() {
    const currentRoute =  nextRouter.query.day || 'domingo-noite'
    console.log(currentRoute)
    const speakerData = speakerInfo[currentRoute].speaker 
    
    return speakerData
  }

  function handleRedirectToSobreNos() {
    nextRouter.push('/Sobre-nos')
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

            <button 
              className={cronogramaPageStyles["speaker-redirector-button"]}
              onClick={handleRedirectToSobreNos}  
              >
                <Link href="/Sobre-nos">
                  <a>Conheça nossa equipe</a>   
                </Link>
            </button>
          </div>
      </div>
    </section>
  )
}