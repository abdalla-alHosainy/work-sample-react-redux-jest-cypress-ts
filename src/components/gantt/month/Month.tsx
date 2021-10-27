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
        <ProjectLabel>
          <span>Title</span>
          <span>S.Date</span>
          <span>E.Date</span>
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
  /* align-items: center;*/
`
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
  overflow-y: scroll;
  /* overflow-x: hidden; */
  &::-webkit-scrollbar {
    width: 0.7vw;
  }
  &::-webkit-scrollbar-track {
    background: ${color.offWhiteDark};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.gray};
    border-radius: 20px;
    border: 3px solid ${color.offWhiteDark};
  }
`
const DaysLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    line-height: 0.2;
    ${font.bold};
    font-size: 1.5vw;
    color: ${color.gray};
  }
  div {
    width: 67vw;
    /* background-color: #ff4242; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    ${font.regular};
    color: ${color.gray};
    span {
      display: block;
      /* margin: 0 1vw; */
    }
  }
`
const ProjectLabel = styled.div`
  width: 26vw;
  /* height: 7vh; */
  /* background-color: #aeff9a; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  span {
    ${font.bold};
    font-size: 1.2vw;
    width: 7vw;
    text-align: center;
    line-height: 3;
    letter-spacing: -0.01vw;
    margin: 0 0.7vw;

    &:nth-child(1) {
      width: 7vw;
      text-align: start;
    }
  }
`
export default Month
