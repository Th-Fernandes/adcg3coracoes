import { useRouter } from "next/router";
import { FacebookLogo, Key, YoutubeLogo } from "phosphor-react";
import { SocialMediaButton } from "../../utils/main/SocialMediaButton";
import landingPageStyles from "./index.module.scss";

export function HeadOfficeLandingPage() {
  const nextRouter = useRouter()

  function handleSetButtonClassName(textContent) {
    let className = undefined;

    textContent.includes('página')
      ? className = "head-oficce-facebook-button"
      : className = "head-oficce-youtube-button"

    return className
  }

  function handleRedirectToSocialMedia(textContent) {
    let socialMediaUrl = undefined;

    textContent.includes('página')
      ? socialMediaUrl = 'https://www.facebook.com/adcampogranderj/'
      : socialMediaUrl = 'https://www.youtube.com/c/ADCampoGrande'

    console.log(nextRouter)
    return socialMediaUrl
  }

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
          ['facebook', 'youtube'].map((platform, index) => (
            <li className={landingPageStyles["head-oficce-button-container"]} key={index}>
              <SocialMediaButton platform={platform} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}