import louvoresPageStyle from "./index.module.scss";
import platforms from "./platforms.json";
import {EmberYoutubePlayer} from "components/louvores-page/playlist-options/platforms-ember/youtube"
import {EmberSpotifyPlayer} from "components/louvores-page/playlist-options/platforms-ember/spotify"

export function PlaylistOptionsLouvoresPage() {
  return (
    <section className={louvoresPageStyle["playlist-options-container"]}>
      <span>
        Quer ouvir um bom louvor mas não sabe o que ouvir?
        Recomendamos esses louvores que cantamos em nossa congregação.
      </span>

      <ul className={louvoresPageStyle["playlist-options-list"]}>
        {
          platforms.map(({ title, img, className, url}, index) => (
            <li className={louvoresPageStyle["playlist-option"]} key={index}>
              <article>
                <h2 className={louvoresPageStyle['playlist-title']}>{title}</h2>
                <a href={url} target="_blank">
                  <div
                    className={`${louvoresPageStyle["platform-card"]} ${louvoresPageStyle[className]}`}>
                    <img src={img} alt="acessar playlist" />
                  </div>
                </a>
              </article>
                {
                  title.includes('Youtube') 
                    ? <EmberYoutubePlayer/>
                    : <EmberSpotifyPlayer/>
                }
            </li>
          ))
        }
      </ul>
    </section>
  )
}