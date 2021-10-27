import { project, task } from "@types"
import styled from "@emotion/styled"
import Bar from "./bar/Bar"
import _ from "lodash"
import { lighten } from "polished"
interface component {
  project: project
}
const ProjectBars: React.FC<component> = ({ project }) => {
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
  const minDate = _.min(tasksStartDates)!
  const maxDate = _.max(tasksEndDates)!
  const meanPercentage = _.mean(tasksPercentages)
  return (
    <Holder>
      <Bar
        percentage={meanPercentage}
        startDate={minDate}
        endDate={maxDate}
        color={project.color}
      />
      {project.tasks.map((task: task) => {
        return (
          <Bar
            key={task.id}
            percentage={task.percentage}
            startDate={task.startDate}
            endDate={task.endDate}
            color={lighten(0.2, project.color)}
          />
        )
      })}
    </Holder>
  )
}
const Holder = styled.div``
export default ProjectBars
