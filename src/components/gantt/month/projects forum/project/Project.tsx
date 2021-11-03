import { task, month } from "@types"
import styled from "@emotion/styled"
import Task from "./task/Task"
import _, { round } from "lodash"
import SVG from "@assets/svg"
import { useState, useEffect, useRef } from "react"
import TaskForum from "./task fill forum/TaskForum"
import { lighten } from "polished"
import { v4 as uuid } from "uuid"
import { darken } from "polished"
import { deleteProject, willDeleteProject } from "@redux_local/ganttSlice"
import { useDispatch } from "react-redux"
import theme from "@style"
import ProjectEdit from "./ProjectEdit"
const color = theme.gantt.color
const font = theme.gantt.font
interface projectTemplate {
  ids: [number, string]
  month: month
}
const Project: React.FC<projectTemplate> = ({ ids, month }) => {
  const [newTask, setNewTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const projectRef = useRef(null)
  const projectEditRef = useRef(null)
  const taskNewRef = useRef(null)
  useEffect(() => {
    function handleKeyEscape(e) {
      if (e.key === "Escape") {
        setDeleteMode(false)
        setEditMode(false)
      }
    }
    function handleClickAnywhere(e) {
      if (projectRef.current && !projectRef.current.contains(e.target)) {
        setDeleteMode(false)
      }
      if (projectEditRef.current && !projectEditRef.current.contains(e.target)) {
        setEditMode(false)
      }
      if (taskNewRef.current && !taskNewRef.current.contains(e.target)) {
        setNewTask(false)
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
    dispatch(willDeleteProject({ ids, willDeleteProject: deleteMode }))
  }, [deleteMode])
  const monthNameShort = month.name.slice(0, 3)
  const project = _.find(month.projects, p => p.id === ids[1])
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
  const minDate = _.min(tasksStartDates)
  const maxDate = _.max(tasksEndDates)
  const meanPercentage = _.mean(tasksPercentages)
  const dispatch = useDispatch()

  function handleDeleteProject() {
    dispatch(deleteProject({ ids }))
    setDeleteMode(false)
  }
  return (
    <Holder key={project.id} ref={projectRef}>
      <ProjectTitle>
        <Color data-testid="project-color" style={{ fill: project.color }}>
          <SVG.Circle />
        </Color>
        <Item data-testid="project-title">{project.title}</Item>
        <Item data-testid="project-start-date">{minDate + " " + monthNameShort}</Item>
        <Item data-testid="project-end-date">{maxDate + " " + monthNameShort}</Item>
        <Item data-testid="project-percentage">{round(meanPercentage) + "%"}</Item>
        <Button data-testid="project-edit-button" onClick={() => setEditMode(true)}>
          <SVG.Edit />
        </Button>
        <Button data-testid="project-delete-button" onClick={() => setDeleteMode(true)}>
          <SVG.Delete />
        </Button>
      </ProjectTitle>

      {editMode && (
        <ProjectEditHolder ref={projectEditRef}>
          <ProjectEdit month={month} ids={[month.id, project.id]} visible={e => setEditMode(e)} />
        </ProjectEditHolder>
      )}
      <DeleteProject style={{ display: deleteMode ? "flex" : "none" }}>
        <span>
          you are going to delete <br /> {`"${project.title}""`}
        </span>
        <div className="button-holder">
          <button data-testid="task-delete-button-delete" onClick={() => handleDeleteProject()}>
            Delete
          </button>
          <button data-testid="task-delete-button-cancel" onClick={() => setDeleteMode(false)}>
            Cancel
          </button>
        </div>
      </DeleteProject>
      {project.tasks.map((task: task) => {
        return (
          <TaskCover style={{ fill: project.color }} key={task.id}>
            <div className="circle">
              <SVG.Circle />
            </div>
            <Task month={month} ids={[...ids, task.id]} />
          </TaskCover>
        )
      })}
      {newTask ? (
        <div ref={taskNewRef}>
          <TaskForum
            month={month}
            visible={(e: boolean) => setNewTask(e)}
            editOrNew="new"
            ids={[...ids, uuid()]}
          />
        </div>
      ) : (
        <AddTask data-testid="add-new-task-button" onClick={() => setNewTask(true)}>
          <SVG.AddTask /> Add New Task
        </AddTask>
      )}
    </Holder>
  )
}

const Holder = styled.div`
  margin: 1vw -0.1vw 1vw 2vw;
  position: relative;
  // The Line Behind The Colorful Circles
  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 1.2vh;
    left: 0.6%;
    background-color: #8c8c8c5c;
    width: 1px;
    height: calc(100% - 3.3vw);
  }
`
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9vw;
  ${font.bold};

  button {
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    button {
      opacity: 0.6;
    }
  }
`
const Color = styled.div`
  position: relative;
  left: -0.1vw;
  margin-right: 0.9vw;
  svg {
    fill: inherit;
    width: 8px;
  }
`
const TaskCover = styled.div`
  position: relative;
  .circle svg {
    position: absolute;
    top: 33%;
    display: inline;
    fill: inherit;
    width: 5px;
    opacity: 0.5;
  }
`
const Item = styled.span`
  width: 5vw;
  white-space: nowrap;
  &:nth-of-type(1) {
    width: 14vw;
  }
  &:nth-of-type(4) {
    width: 3vw;
  }
`
const Button = styled.button`
  position: relative;
  background: none;
  cursor: pointer;
  opacity: 0.6;
  border: none;
  svg {
    pointer-events: none;
    width: 1vw;
  }
  &:hover {
    opacity: 1 !important;
  }
`
const AddTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1vw;
  cursor: pointer;
  width: 10vw;
  white-space: nowrap;
  ${font.bold};
  color: ${color.cyan};
  margin: 0.1vw 0.5vw;
  svg {
    fill: ${color.cyan};
    width: 1.3em;
    margin: 0.1vw 0.5vw;
  }
  &:hover {
    color: ${darken(0.2, color.cyan)};
    svg {
      fill: ${darken(0.2, color.cyan)} !important;
    }
  }
`
const DeleteProject = styled.div`
  position: absolute;
  z-index: 2;
  left: -0.6vw;
  top: -1.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 24.4vw;
  height: calc(1vh + 100%);
  text-align: center;
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
    font-size: 111%;
    line-height: 1.2;
    color: ${color.white};
    /* margin-bottom: 3%; */
  }
  .button-holder {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
  }
  button {
    ${font.bold}
    font-size:1.2vw;
    /* margin: 1vw; */
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
const ProjectEditHolder = styled.div`
  position: absolute;
  top: -0.8vh;
  left: 0.8vw;
  z-index: 2;
  width: 23vw;
  height: 4.7vh;
  background-color: ${color.offWhite};
`

export default Project
