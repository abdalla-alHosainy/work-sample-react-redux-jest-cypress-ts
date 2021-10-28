import { project, task } from "@types"
import styled from "@emotion/styled"
import Task from "./task/Task"
import _, { round } from "lodash"
import SVG from "@assets/svg"
import { useState } from "react"
import TaskForum from "./task fill forum/TaskForum"

import { v4 as uuid } from "uuid"
import { darken } from "polished"
import theme from "@style"
import ProjectEdit from "./ProjectEdit"
const color = theme.gantt.color
const font = theme.gantt.font
interface projectTemplate {
  project: project
  days: number
  monthName: string
  monthId: number
}
const Project: React.FC<projectTemplate> = ({ project, days, monthName, monthId }) => {
  const [newTask, setNewTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const monthNameShort = monthName.slice(0, 3)
  const plankTask: task = {
    id: uuid(),
    title: "",
    startDate: 1,
    endDate: 2,
    percentage: 0,
  }
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
  function handleEdit() {
    setEditMode(true)
  }
  function handleDelete() {
    // setDeleteModal(true)
  }
  return (
    <Holder>
      {!editMode ? (
        <ProjectTitle>
          <Color data-testid="project-color" style={{ fill: project.color }}>
            <SVG.Circle />
          </Color>
          <Item data-testid="project-title">{project.title}</Item>
          <Item data-testid="project-start-date">{minDate + " " + monthNameShort}</Item>
          <Item data-testid="project-end-date">{maxDate + " " + monthNameShort}</Item>
          <Item data-testid="project-percentage">{round(meanPercentage) + "%"}</Item>
          <Button data-testid="project-edit-button" onClick={() => handleEdit()}>
            <SVG.Edit />
          </Button>
          <Button data-testid="project-delete-button" onClick={() => handleDelete()}>
            <SVG.Delete />
          </Button>
        </ProjectTitle>
      ) : (
        <ProjectEdit
          monthId={monthId}
          projectId={project.id}
          projectColor={project.color}
          projectTitle={project.title}
          setEditMode={e => setEditMode(e)}
        />
      )}
      {project.tasks.map((task: task) => {
        return (
          <TaskCover style={{ fill: project.color }}>
            <div className="circle">
              <SVG.Circle />
            </div>
            <Task
              task={task}
              days={days}
              key={task.id}
              monthName={monthName}
              monthId={monthId}
              projectId={project.id}
            />
          </TaskCover>
        )
      })}
      {newTask ? (
        <TaskForum
          task={plankTask}
          days={days}
          editModeState={(e: boolean) => setNewTask(e)}
          editOrNew="new"
          idsArray={[monthId, project.id, uuid()]}
        />
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

export default Project
