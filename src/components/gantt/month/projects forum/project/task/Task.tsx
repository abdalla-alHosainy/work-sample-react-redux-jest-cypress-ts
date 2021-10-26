import { task } from "@types"
import styled from "@emotion/styled"
import SVG from "@assets/svg"
import TaskForum from "../task fill forum/TaskForum"
import { useState } from "react"
import Modal from "react-modal"
interface taskTemplate {
  task: task
  days: number
}
const Task: React.FC<taskTemplate> = ({ task, days }) => {
  const [editMode, setEditMode] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
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
          <Number data-testid="task-start-date">{task.startDate}</Number>
          <Number data-testid="task-end-date">{task.endDate}</Number>
          <Number data-testid="task-percentage">{task.percentage}</Number>
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
  display: flex;
  flex-direction: row;
  button {
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover {
    button {
      opacity: 1 !important;
    }
  }
`
const Button = styled.button``
const Number = styled.span``
const Title = styled.span``
const TaskContent = styled.div``

export default Task
