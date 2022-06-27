import louvoresPageStyle  from "./index.module.scss";

export function PlaylistOptionsLouvoresPage() {
  const platforms = [
    {title: 'Opções no Youtube', img: '/img/youtube-icon.svg'},
    {title: 'Opções no Spotify', img: '/img/spotify-icon.svg'}
  ]

  function setClassByPlatform(platform) {
    if(platform.includes('Youtube')) return louvoresPageStyle["youtube"]
    if(platform.includes('Spotify')) return louvoresPageStyle["spotify"]
  }

  function showEmberPlatform(platform){
   return (
    platform.includes('Youtube') 
      ? (
        <iframe width="800" height="377" src="https://www.youtube.com/embed/5QHF5OQeFOs?list=PL93fhHSVyXGFA_U9kv-7j4XXu2LXDxYMX" title="A Casa É Sua - Casa Worship (Clipe Oficial) @Julliany Souza , @Léo Brandão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      )
      : platform.includes('Spotify')
        ? (
          <iframe src="https://open.spotify.com/embed/playlist/70pcCrwZu8fI3K9MyhCP3T?utm_source=generator&theme=0" width="800" height="375" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
        )
        : console.error('não foi possível encontrar a platforma. Verifique as condicionais.')
   )
     
  }

  return (
    <section className={louvoresPageStyle["playlist-options-container"]}>
      <span>
        Quer ouvir um bom louvor mas não sabe o que ouvir? 
        Recomendamos esses louvores que cantamos em nossa congregação.
      </span>

      <ul className={louvoresPageStyle["playlist-options-list"]}>
        {
          platforms.map(({title, img}) => (
            <li className={louvoresPageStyle["playlist-option"]}>
              <article>
                <h2>{title}</h2>
                <div className={`${louvoresPageStyle["platform-card"]} ${setClassByPlatform(title)}`}>
                  <img src={img} alt="acessar playlist" />
                </div>
              </article>
              
              {showEmberPlatform(title)}
            </li>
          ))
        }
      </ul>
  </section>
  )
}