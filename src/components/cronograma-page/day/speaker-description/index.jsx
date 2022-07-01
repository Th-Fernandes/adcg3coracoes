import speakerImg from "../../../../../public/img/preletores/adriel-souza.svg"
import cronogramaPageStyles from "./index.module.scss";

export function SpeakerDescriptionCronogramaPage() {
  return (
    <section className={cronogramaPageStyles['speaker-section']}>
      <h2 className={cronogramaPageStyles['speaker']}>Preletor</h2>

      <div className={cronogramaPageStyles["speaker-container"]}>
          <img className={cronogramaPageStyles["speaker-img"]} src={speakerImg.src} alt="" />

          <div className={cronogramaPageStyles["speaker-info"]}>
            <h3 className={cronogramaPageStyles['speaker-name']}>Pr. Adriel Souza</h3>
            <p className={cronogramaPageStyles['speaker-description']}>
              Lorem ipsum dolor sit amet, con
              sectetur adipiscing elit.  Curabitur 
              euismod euismod nibh,  quis 
              semper risus cursus eget. Pro
              in sit amet laoreet ex. Aenean ue 
              enim ac porttitor molestie
            </p>

            <button className={cronogramaPageStyles["speaker-redirector-button"]}>
            Conheça nossa equipe
            </button>
          </div>
      </div>

    </section>
  )
}