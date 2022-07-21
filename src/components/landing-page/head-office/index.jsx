import { SocialMediaButton } from "components/utils/main/SocialMediaButton";
import landingPageStyles from "./index.module.scss";

export function HeadOfficeDescription() {
  const socialMedias = ['facebook', 'youtube']

  return (
    <section className={landingPageStyles["head-oficce-main-container"]}>
      <article>
        <h2>Somos ADCG!</h2>
        <p>
          Nossa congregação faz parte da ADCG (Assembléia de Deus em Campo Grande).
          Conheça também o trabalho da nossa sede:
        </p>
      </article>

      <ul>
        {
          socialMedias.map((platform, index) => (
            <li className={landingPageStyles["head-oficce-button-container"]} key={index}>
              <SocialMediaButton platform={platform} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}