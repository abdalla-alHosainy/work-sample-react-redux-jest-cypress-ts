import { month } from "@types"
import styled from "@emotion/styled"
import SVG from "@assets/svg"
import TaskForum from "../task fill forum/TaskForum"
import { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteTask, willDeleteTask } from "@redux_local/ganttSlice"
import _ from "lodash"
import theme from "@style"
import { darken, lighten } from "polished"
const color = theme.gantt.color
const font = theme.gantt.font
interface taskTemplate {
  // task: task
  // days: number
  // monthName: string
  // monthId: number
  // projectId: string
  // canDelete: boolean
  month: month
  ids: [number, string, string]
}
const Task: React.FC<taskTemplate> = ({ month, ids }) => {
  const [editMode, setEditMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const taskRef = useRef(null)
  const dispatch = useDispatch()
  const project = _.find(month.projects, p => p.id === ids[1])
  const task = _.find(project.tasks, t => t.id === ids[2])
  const monthNameShort = month.name.slice(0, 3)
  useEffect(() => {
    function handleKeyEscape(e) {
      if (e.key === "Escape") {
        setDeleteMode(false)
        setEditMode(false)
      }
    }
    function handleClickAnywhere(e) {
      if (taskRef.current && !taskRef.current.contains(e.target)) {
        setEditMode(false)
        setDeleteMode(false)
      }
    }
    document.addEventListener("keyup", handleKeyEscape)
    document.addEventListener("mouseup", handleClickAnywhere)
    return () => {
      document.removeEventListener("keyup", handleClickAnywhere)
      document.removeEventListener("keyup", handleKeyEscape)
    }
  }, [])
  useEffect(() => {
    dispatch(willDeleteTask({ ids, willDeleteTask: deleteMode }))
  }, [deleteMode])
  function handleEdit() {
    setEditMode(true)
  }
  function handleDelete() {
    dispatch(deleteTask({ ids }))
  }

  return (
    <Holder data-testid="task-holder" ref={taskRef}>
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
          disabled={project.tasks.length === 1}
        >
          <SVG.Delete />
        </Button>
      </TaskContent>
      {editMode && (
        <EditTask style={{ display: editMode ? "block" : "none" }}>
          <TaskForum visible={e => setEditMode(e)} editOrNew="edit" ids={ids} month={month} />
        </EditTask>
      )}
      <DeleteTask data-testid="task-delete" style={{ display: deleteMode ? "flex" : "none" }}>
        <span data-testid="task-delete-title"> You will delete {task.title} !! </span>
        <button data-testid="task-delete-button-delete" onClick={() => handleDelete()}>
          Delete
        </button>
        <button data-testid="task-delete-button-cancel" onClick={() => setDeleteMode(false)}>
          Cancel
        </button>
      </DeleteTask>
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
  .edit-task {
    position: absolute;
    z-index: 2;
    top: -0.5vh;
    left: 0;
    width: 24vw;
    height: 4.2vh;
    background-color: ${color.offWhite};
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
  position: absolute;
  z-index: 2;
  left: 0;
  top: -0.8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 24vw;
  height: 3.9vh;
  text-align: center;
  /* margin-top: -1vh; */
  /* margin-bottom: -1vh; */
  background-color: ${lighten(0.2, color.red)};
  background: repeating-linear-gradient(
    45deg,
    ${lighten(0.2, color.red)},
    ${lighten(0.2, color.red)} 2px,
    ${lighten(-0.2, color.red)} 5px,
    ${lighten(-0.2, color.red)} 5px
  );
  border-radius: 0.3vw;

  span {
    ${font.bold};
    font-size: 0.9vw;
    margin-right: 0.5vw;
    color: ${color.white};
  }
  button {
    ${font.bold}
    font-size:0.8vw;
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
const EditTask = styled.div`
  position: absolute;
  z-index: 2;
  top: -0.5vh;
  left: 0;
  width: 24vw;
  height: 4.2vh;
  background-color: ${color.offWhite};
`

export default Task
