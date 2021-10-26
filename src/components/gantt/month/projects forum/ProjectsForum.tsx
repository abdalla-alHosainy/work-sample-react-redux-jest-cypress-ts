import { project } from "@types"
import Project from "./project/Project"
import styled from "@emotion/styled"
interface projects {
  projects: project[]
  days: number
}
const ProjectsForum: React.FC<projects> = ({ projects, days }) => {
  return (
    <Holder>
      {projects &&
        projects.map((project: project) => {
          return <Project project={project} days={days} key={project.id} />
        })}
    </Holder>
  )
}
const Holder = styled.div``
export default ProjectsForum
