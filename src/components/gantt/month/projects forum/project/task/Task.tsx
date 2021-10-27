import { task } from "@types"
import styled from "@emotion/styled"
import SVG from "@assets/svg"
import TaskForum from "../task fill forum/TaskForum"
import { useState } from "react"
import Modal from "react-modal"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface taskTemplate {
  task: task
  days: number
  monthName: string
}
const Task: React.FC<taskTemplate> = ({ task, days, monthName }) => {
  const [editMode, setEditMode] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const monthNameShort = monthName.slice(0, 3)
  function handleEdit() {
    setEditMode(true)
  }
  function handleDelete() {
    // setDeleteModal(true)
  }
  return (
    <Holder data-testid="task-holder">
      {!editMode && (
        <TaskContent>
          <Title data-testid="task-title">{task.title}</Title>
          <Number data-testid="task-start-date">{task.startDate + " " + monthNameShort} </Number>
          <Number data-testid="task-end-date">{task.endDate + " " + monthNameShort}</Number>
          <Number data-testid="task-percentage">{task.percentage + "%"}</Number>
          <Button data-testid="task-edit-button" onClick={() => handleEdit()}>
            <SVG.Edit />
          </Button>
          <Button data-testid="task-delete-button" onClick={() => handleDelete()}>
            <SVG.Delete />
          </Button>
        </TaskContent>
      )}
      {editMode && (
        <TaskForum task={task} days={days} editModeState={(e: boolean) => setEditMode(e)} />
      )}
      <Modal isOpen={deleteModal} testId="task-delete-modal" />
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;

  button {
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    button {
      opacity: 0.4;
    }
  }
`
const TaskContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.7vw 0.4vw 0.7vw 1vw;
  cursor: pointer;
  ${font.regular};
  font-size: 1.1vw;
`
const Button = styled.button`
  position: relative;
  background: none;
  cursor: pointer;
  opacity: 0.4;
  border: none;
  svg {
    pointer-events: none;
    width: 1vw;
  }
  &:hover {
    opacity: 1 !important;
  }
`
const Number = styled.span`
  width: 5vw;
`
const Title = styled.span`
  width: 11vw;
  white-space: nowrap;
`

export default Task
