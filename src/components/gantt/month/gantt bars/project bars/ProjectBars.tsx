import { project, task } from "@types"
import styled from "@emotion/styled"
import Bar from "./bar/Bar"
import _, { round } from "lodash"
import { lighten } from "polished"
import theme from "@style"
const themeColor = theme.gantt.color
interface component {
  project: project
  days: number
}
const ProjectBars: React.FC<component> = ({ project, days }) => {
  let tasksStartDates = []
  let tasksEndDates = []
  let tasksPercentages = []
  for (const task of project.tasks) {
    tasksStartDates.push(task.startDate)
  }
  for (const task of project.tasks) {
    tasksEndDates.push(task.endDate)
  }
  for (const task of project.tasks) {
    tasksPercentages.push(task.percentage)
  }
  const minDate: any = _.min(tasksStartDates)
  const maxDate: any = _.max(tasksEndDates)
  const meanPercentage = _.mean(tasksPercentages)
  function left() {
    // const unit = (1 / days) * 100
    const unit = 2.195
    return `${unit * minDate - unit}vw`
  }
  function width() {
    // const unit = (1 / days) * 100
    const unit = 2.195
    return `${unit * (maxDate - minDate)}vw`
  }
  console.log(width())

  const Holder = styled.div`
    position: relative;
    margin-bottom: 6.3vh;
    .bar:nth-of-type(2) {
      background-color: #fff !important;
    }
    /* overflow: hidden; */
    &:before {
      position: absolute;
      top: -0.3vh;
      left: calc(${left()} - 0.1vw);
      background-color: ${lighten(0.43, themeColor[project.color])};
      content: "";
      width: calc(${width()} + 0.24vw);
      height: calc(100% + 1.9vh);
      border-radius: 0.9vw;
      box-sizing: border-box;
      border: 0.2vw solid ${themeColor[project.color]};
      padding: 6px;
    }
  `
  const Dashed = styled.div`
    position: absolute;
    z-index: 2;
    top: -0.3vh;
    left: calc(${left()} - 0.1vw);
    width: calc(${width()} + 0.24vw);
    height: calc(100% + 1.9vh);
    border-radius: 0.9vw;
    transition: all 0.5s;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      #000000 5px,
      #000000 5px
    );
  `
  return (
    <Holder className="project-bars">
      <Dashed style={{ opacity: project.willDelete ? 1 : 0 }} />
      <Bar
        percentage={round(meanPercentage)}
        startDate={minDate}
        endDate={maxDate}
        color={themeColor[project.color]}
        days={days}
        title={project.title}
        willDelete={project.willDelete}
      />

      {project.tasks.map((task: task) => {
        return (
          <Bar
            key={task.id}
            percentage={task.percentage}
            startDate={task.startDate}
            endDate={task.endDate}
            color={lighten(0.05, themeColor[project.color])}
            days={days}
            title={task.title}
            willDelete={task.willDelete}
          />
        )
      })}
    </Holder>
  )
}
export default ProjectBars
