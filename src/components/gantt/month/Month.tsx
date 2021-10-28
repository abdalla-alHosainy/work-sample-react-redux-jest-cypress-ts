import { project } from "@types"
import ProjectsHolder from "./projects forum/ProjectsHolder"
import styled from "@emotion/styled"
import theme from "@style"
import Days from "./gantt bars/Days"
import _ from "lodash"

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
  const daysArray = _.range(1, month.days + 1)
  return (
    <Holder>
      <Label>
        <Background />
        <ProjectLabel>
          <span>Title</span>
          <span>Start</span>
          <span>End</span>
          <span>Perc</span>
        </ProjectLabel>
        <DaysLabel>
          <h2> Days</h2>
          <div>
            {daysArray.map((day: number) => {
              return <span key={day}>{day}</span>
            })}
          </div>
        </DaysLabel>
      </Label>
      <Main>
        <ProjectsHolder projects={month.projects} days={month.days} monthName={month.name} />

        <Days days={month.days} projects={month.projects} />
      </Main>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Label = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`
const Background = styled.div`
  position: absolute;
  z-index: 0;
  width: 27.7%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${color.offWhite};
`
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.6vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.gray};
    border-radius: 20px;
  }
`
const DaysLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    line-height: 0.2;
    ${font.bold};
    font-size: 1.4vw;
    color: ${color.gray};
  }
  div {
    width: 68vw;
    /* background-color: #ff4242; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    ${font.regular};
    color: ${color.gray};
    span {
      position: relative;
      /* width: 4vw; */
      &:before {
        content: "";
        position: absolute;
        left: 30%;
        height: 100vh;
        top: 90%;
        width: 1%;
        background-color: #00000033;
      }
    }
  }
`
const ProjectLabel = styled.div`
  z-index: 1;
  width: 26vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4vh;
  span {
    ${font.bold};
    font-size: 0.9vw;
    width: 2vw;
    text-align: center;
    line-height: 3;
    letter-spacing: -0.01vw;
    margin: 0 0.7vw;
    color: ${color.gray};
    &:nth-child(1) {
      width: 7.9vw;
      text-align: start;
      margin-left: 2.6vw;
    }
  }
`
export default Month
