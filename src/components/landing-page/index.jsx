import { GlobalHeader } from "../utils/Header";
import { PresentationCardLandingPage } from "./presentation-card";
import { RedirectorLandingPage } from "./redirector";
import { GlobalCronograma } from "../utils/main/cronograma";
import { HeadOfficeLandingPage } from "./head-oficce";

export function LandingPage() {
  return (
    <>
      <GlobalHeader/>

      <main>
        <PresentationCardLandingPage/>
        <RedirectorLandingPage/>
        <GlobalCronograma/>
        <HeadOfficeLandingPage/>
      </main>
    </>
  )
}