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
      <Background />
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
  display: flex;
  flex-direction: column;
  .projects-holder {
    z-index: 1;
  }
`
const Background = styled.div`
  z-index: 0;
  width: 27%;
  height: 81%;
  position: fixed;
  bottom: 2.5vh;
  border-radius: 0vw 0vw 0vw 0.8vw;
  left: 5vw;
  background-color: ${color.offWhite};
`

export default ProjectsHolder
