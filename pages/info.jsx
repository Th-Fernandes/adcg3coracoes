import { GlobalHeader } from "components/utils/Header";
import { AddressInfo } from "components/info-page/address-info";
import { GlobalCronograma } from "components/utils/main/cronograma";
import { SobreNosRedirector } from "components/info-page/about-us-redirector";

export default function InfoPage() {
  return (
    <>
      <GlobalHeader/>

      <main>
        <AddressInfo/>
        <GlobalCronograma/>
        <SobreNosRedirector/>
      </main>    
    </>
  )
}