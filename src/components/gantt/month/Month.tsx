import { project } from "@types"
import ProjectsHolder from "./projects forum/ProjectsHolder"

interface month {
  month: {
    id: number
    name: string
    days: number
    projects: project[]
  }
}
const Month: React.FC<month> = ({ month }) => {
  return <ProjectsHolder projects={month.projects} days={month.days} monthName={month.name} />
}
export default Month
