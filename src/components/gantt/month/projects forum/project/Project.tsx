import { project } from "@types"
interface projectTemplate {
  project: project
  days: number
}
const Project: React.FC<projectTemplate> = ({ project, days }) => {
  return <div>{project.title}</div>
}

export default Project
