import SocialMediaButtonStyles from "./index.module.scss";
import { FacebookLogo, YoutubeLogo } from "phosphor-react";

export function SocialMediaButton({platform = '/'}) {
  const buttonTextContent = platform === 'youtube' ? 'acessar canal' : 'acessar página'

  const platformData = {
    youtube: {
      className: "youtube-button",
      url: 'https://www.youtube.com/c/ADCampoGrande',
      logoComponent: <YoutubeLogo size={48} color="#ffffff" weight="fill" />
    },
    facebook: {
      className: "facebook-button",
      url: "https://www.facebook.com/adcampogranderj/",
      logoComponent: <FacebookLogo size={48} color="#ffffff" weight="fill" />
    }
  }

  function handleSetButtonClassName() {
    return platformData[platform].className
  }

  function handleRedirectToSocialMedia() {
    return platformData[platform].url
  }

  return (
    <button
      className={SocialMediaButtonStyles[handleSetButtonClassName('youtube')]}
    >
      <a
        className={SocialMediaButtonStyles["redirector-link"]}
        href={handleRedirectToSocialMedia()}
        target="_blank">
        {platformData[platform].logoComponent}
        <span>{buttonTextContent}</span>
      </a>
    </button>
  )
}  