import { task } from "@types"
interface taskTemplate {
  task: task
  days: number
}
const Task: React.FC<taskTemplate> = ({ task, days }) => {
  return <div>{task.title}</div>
}

export default Task
