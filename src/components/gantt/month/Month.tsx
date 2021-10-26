import { project } from "@types"
import ProjectsForum from "./projects forum/ProjectsForum"

interface month {
  month: {
    id: number
    name: string
    days: number
    projects: project[]
  }
}
const Month: React.FC<month> = ({ month }) => {
  return <ProjectsForum projects={month.projects} days={month.days} />
}
export default Month
