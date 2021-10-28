import { project } from "@types"
import Project from "./project/Project"
import styled from "@emotion/styled"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface projects {
  projects: project[]
  days: number
  monthName: string
}
const ProjectsHolder: React.FC<projects> = ({ projects, days, monthName }) => {
  return (
    <Holder>
      <div className="projects-holder">
        {projects &&
          projects.map((project: project) => {
            return <Project project={project} days={days} key={project.id} monthName={monthName} />
          })}
      </div>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  width: 26vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  .projects-holder {
    z-index: 1;
  }
`

export default ProjectsHolder
