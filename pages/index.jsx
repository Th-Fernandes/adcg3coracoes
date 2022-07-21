import { GlobalHeader } from "components/utils/Header";
import { PresentationCard } from "components/landing-page/presentation-card";
import { LouvoresRedirector } from "components/landing-page/louvores-redirector";
import { GlobalCronograma } from "components/utils/main/cronograma";
import { HeadOfficeDescription } from "components/landing-page/head-office";

export default function LandingPage() {
  return (
    <>
      <GlobalHeader/>

      <main>
        <PresentationCard/>
        <LouvoresRedirector/>
        <GlobalCronograma/>
        <HeadOfficeDescription/>
      </main>
    </>
  )
}