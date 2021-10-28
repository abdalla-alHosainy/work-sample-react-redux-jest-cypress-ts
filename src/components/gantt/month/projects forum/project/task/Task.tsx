import { task } from "@types"
import styled from "@emotion/styled"
import SVG from "@assets/svg"
import TaskForum from "../task fill forum/TaskForum"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTask } from "@redux_local/ganttSlice"
import theme from "@style"
import { darken, lighten } from "polished"
const color = theme.gantt.color
const font = theme.gantt.font
interface taskTemplate {
  task: task
  days: number
  monthName: string
  monthId: number
  projectId: string
}
const Task: React.FC<taskTemplate> = ({ task, days, monthName, monthId, projectId }) => {
  const [editMode, setEditMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const dispatch = useDispatch()
  const monthNameShort = monthName.slice(0, 3)
  function handleEdit() {
    setEditMode(true)
  }
  function handleDelete() {
    dispatch(deleteTask({ ids: [monthId, projectId, task.id] }))
  }
  return (
    <Holder data-testid="task-holder">
      {!editMode && !deleteMode && (
        <TaskContent>
          <Title data-testid="task-title">{task.title}</Title>
          <Number data-testid="task-start-date">{task.startDate + " " + monthNameShort} </Number>
          <Number data-testid="task-end-date">{task.endDate + " " + monthNameShort}</Number>
          <Number data-testid="task-percentage">{task.percentage + "%"}</Number>
          <Button className="edit" data-testid="task-edit-button" onClick={() => handleEdit()}>
            <SVG.Edit />
          </Button>
          <Button
            className="edit"
            data-testid="task-delete-button"
            onClick={() => setDeleteMode(true)}
          >
            <SVG.Delete />
          </Button>
        </TaskContent>
      )}
      {editMode && (
        <TaskForum
          task={task}
          days={days}
          editModeState={(e: boolean) => setEditMode(e)}
          editOrNew="edit"
          idsArray={[monthId, projectId, task.id]}
        />
      )}
      {deleteMode && (
        <DeleteTask data-testid="task-delete">
          <span data-testid="task-delete-title"> You will delete {task.title} !! </span>
          <button data-testid="task-delete-button-delete" onClick={() => handleDelete()}>
            Delete
          </button>
          <button data-testid="task-delete-button-cancel" onClick={() => setDeleteMode(false)}>
            Cancel
          </button>
        </DeleteTask>
      )}
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;

  button.edit {
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    button.edit {
      opacity: 0.4;
    }
  }
`
const TaskContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.6vw -0.9vw 0.6vw 1.5vw;
  cursor: pointer;
  ${font.regular};
  font-size: 0.95vw;
`
const Button = styled.button`
  position: relative;
  left: -1vw;
  background: none;
  cursor: pointer;
  opacity: 0.4;
  border: none;
  svg {
    /* display: inline-block; */
    pointer-events: none;
    width: 0.8vw;
  }
  &:hover {
    opacity: 1 !important;
  }
`
const Number = styled.span`
  /* word-spacing: nowrap; */
  width: 5vw;
  /* &:nth-of-type(3) {
    width: 4vw;
  } */
`
const Title = styled.span`
  width: 14vw;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`
const DeleteTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.7vh;
  margin-top: -1vh;
  margin-bottom: -1vh;
  background-color: ${lighten(0.2, color.red)};
  border-radius: 0.3vw;

  span {
    ${font.bold};
    font-size: 0.9vw;
    margin-right: 0.5vw;
    color: #fff;
  }
  button {
    ${font.bold}
    font-size:0.7vw;
    margin: 0.2vw;
    border-radius: 0.3vw;
    border: none;
    cursor: pointer;
    &:nth-of-type(1) {
      color: #fff;
      background-color: ${darken(0.2, color.red)};
      &:hover {
        background-color: ${color.red};
      }
    }
    &:nth-of-type(2) {
      background-color: ${darken(0.2, color.white)};
      &:hover {
        background-color: ${color.white};
      }
    }
  }
`

export default Task
