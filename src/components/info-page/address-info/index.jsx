import infoStyles from "./index.module.scss";

export function AddressInfo(){
  return (
    <section className={infoStyles["address-section"]} >
      <h2 className={infoStyles["address-title"]}>Venha nos visitar!</h2>

      <p className={infoStyles["address-description"]}>
        Nós ficamos próximos a craque do pão, em Campo Grande (R. Homero Fortuna Carneiro, 518 - Campo Grande, Rio de Janeiro - RJ, 23070-390)
      </p>

      <iframe className={infoStyles["address-gmaps-ember"]} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.491880082609!2d-43.57891078503448!3d-22.895221385017713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3f27612b149%3A0x86c86503d34228bd!2sR.%20Homero%20Fortuna%20Carneiro%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023070-390!5e0!3m2!1spt-BR!2sbr!4v1656977191453!5m2!1spt-BR!2sbr"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </section>
  )
}