import { GlobalHeader } from "../utils/Header";
import { GlobalCronograma } from "../utils/main/cronograma";
import RedirectorAboutUsInfoPage from "./about-us-redirector";
import { AddressInfoPage } from "./address";

export function InfoPage() {
  

  return (
    <>
      <GlobalHeader/>

      <main>
        <AddressInfoPage/>
        <GlobalCronograma/>
        <RedirectorAboutUsInfoPage/>
      </main>    
    </>
  )
}