import { GlobalHeader } from "components/utils/Header";
import { OurGroups } from "components/sobre-nos-page/groups";
import { OurDepartments } from "components/sobre-nos-page/departments";

export default function SobreNosPage() {
  return (
    <>
      <GlobalHeader />

      <main>
        <OurGroups />
        <OurDepartments />
      </main>
    </>
  )
}