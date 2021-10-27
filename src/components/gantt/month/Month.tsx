import { project } from "@types"
import ProjectsHolder from "./projects forum/ProjectsHolder"
import styled from "@emotion/styled"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font

interface month {
  month: {
    id: number
    name: string
    days: number
    projects: project[]
  }
}
const Month: React.FC<month> = ({ month }) => {
  return (
    <Holder>
      <ProjectsHolder projects={month.projects} days={month.days} monthName={month.name} />
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 100%; */
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1vw;
  }
  &::-webkit-scrollbar-track {
    background: ${color.offWhiteDark};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.blue};
    border-radius: 20px;
    border: 3px solid ${color.offWhiteDark};
  }
`
export default Month
