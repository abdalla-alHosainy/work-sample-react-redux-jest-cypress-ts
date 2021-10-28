import styled from "@emotion/styled"
import { project } from "@types"
import _ from "lodash"
import ProjectBars from "./project bars/ProjectBars"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface projects {
  projects: project[]
  days: number
}
const Days: React.FC<projects> = ({ projects, days }) => {
  return (
    <Holder>
      {projects.map((project: project) => {
        return <ProjectBars project={project} key={project.id} days={days} />
      })}
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 62.6vw;
  left: 0.4vw;
  .project-bars:nth-of-type(1) {
    margin-top: 2.2vh;
  }
`

export default Days
