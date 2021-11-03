import { project, month } from "@types"
import Project from "./project/Project"
import styled from "@emotion/styled"
import { useState } from "react"
import ProjectNew from "./new project/ProjectNew"
import SVG from "@assets/svg"
import { darken } from "polished"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface projects {
  month: month
}
const ProjectsHolder: React.FC<projects> = ({ month }) => {
  const [newProject, setNewProject] = useState(false)

  const { projects } = month
  return (
    <Holder>
      <div className="projects-holder">
        {projects &&
          projects.map((project: project) => {
            return <Project ids={[month.id, project.id]} month={month} key={project.id} />
          })}
      </div>
      <div className="add-project">
        {!newProject ? (
          <AddProject data-testid="add-new-Project-button" onClick={() => setNewProject(true)}>
            <SVG.AddTask /> Add New Project
          </AddProject>
        ) : (
          <ProjectNew month={month} visible={(state: boolean) => setNewProject(state)} />
        )}
      </div>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  width: 26vw;
  height: 130%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  .add-project {
    padding-bottom: 4vh;
  }
`
const AddProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5vw;
  cursor: pointer;
  white-space: nowrap;
  ${font.bold};
  color: ${color.blue};
  margin: 0.1vw 3.5vw;
  /* margin: 3vw 2vw; */
  /* padding-bottom: 10vh; */

  svg {
    fill: ${color.blue};
    width: 2.1vw;
    margin: 1vw;
  }
  &:hover {
    color: ${darken(0.2, color.blue)};
    svg {
      fill: ${darken(0.2, color.blue)} !important;
    }
  }
`

export default ProjectsHolder
