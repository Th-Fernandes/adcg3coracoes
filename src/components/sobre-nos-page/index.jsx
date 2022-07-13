import { GlobalHeader } from "../utils/Header";
import {GroupsSobreNosPage} from "./groups";
import { DepartmentsSobreNosPage } from "./departments";

export function SobreNosPage() {
  return (
    <>
    <GlobalHeader />

    <main>
      <GroupsSobreNosPage/>
      <DepartmentsSobreNosPage/>
    </main>
    </>
  )
}