import { project, task } from "@types"
import styled from "@emotion/styled"
import Bar from "./bar/Bar"
import _ from "lodash"
import { lighten } from "polished"
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
  function width() {
    const unit = (1 / days) * 100
    return `${unit * (maxDate - minDate)}%`
  }
  console.log(width())
  const Holder = styled.div`
    position: relative;
    margin-bottom: 6.7vh;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${lighten(0.43, project.color)};
      content: "";
      width: ${width()};
      height: 100%;
      border-radius: 0.9vw;
    }
  `
  return (
    <Holder className="project-bars">
      <Bar
        percentage={meanPercentage}
        startDate={minDate}
        endDate={maxDate}
        color={project.color}
        days={days}
        title={project.title}
      />
      {project.tasks.map((task: task) => {
        return (
          <Bar
            key={task.id}
            percentage={task.percentage}
            startDate={task.startDate}
            endDate={task.endDate}
            color={lighten(0.05, project.color)}
            days={days}
            title={task.title}
          />
        )
      })}
    </Holder>
  )
}
export default ProjectBars
