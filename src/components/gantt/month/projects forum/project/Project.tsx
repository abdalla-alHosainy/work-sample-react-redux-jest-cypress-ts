import { project, task } from "@types"
import styled from "@emotion/styled"
import Task from "./task/Task"
interface projectTemplate {
  project: project
  days: number
}
const Project: React.FC<projectTemplate> = ({ project, days }) => {
  return (
    <Holder>
      {project &&
        project.tasks.map((task: task) => {
          return <Task task={task} days={days} />
        })}
    </Holder>
  )
}
const Holder = styled.div``

export default Project
