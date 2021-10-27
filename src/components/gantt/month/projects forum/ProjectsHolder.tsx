import { project } from "@types"
import Project from "./project/Project"
import styled from "@emotion/styled"
interface projects {
  projects: project[]
  days: number
  monthName: string
}
const ProjectsHolder: React.FC<projects> = ({ projects, days, monthName }) => {
  return (
    <Holder>
      {projects &&
        projects.map((project: project) => {
          return <Project project={project} days={days} key={project.id} monthName={monthName} />
        })}
    </Holder>
  )
}
const Holder = styled.div``
export default ProjectsHolder
