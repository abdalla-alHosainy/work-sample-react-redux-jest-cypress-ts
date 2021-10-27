import { project, task } from "@types"
import styled from "@emotion/styled"
import Task from "./task/Task"
import _ from "lodash"
import SVG from "@assets/svg"
import { useState } from "react"
import TaskForum from "./task fill forum/TaskForum"
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { v4 as uuid } from "uuid"
import { darken } from "polished"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface projectTemplate {
  project: project
  days: number
  monthName: string
}
const Project: React.FC<projectTemplate> = ({ project, days, monthName }) => {
  const [newTask, setNewTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
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
      <ProjectTitle>
        <Item data-testid="project-title">{project.title}</Item>
        <Item data-testid="project-start-date">{minDate + " " + monthNameShort}</Item>
        <Item data-testid="project-end-date">{maxDate + " " + monthNameShort}</Item>
        <Item data-testid="project-percentage">{meanPercentage + "%"}</Item>
        <Color data-testid="project-color" style={{ backgroundColor: project.color }} />
        <Button data-testid="project-edit-button" onClick={() => handleEdit()}>
          <SVG.Edit />
        </Button>
        <Button data-testid="project-delete-button" onClick={() => handleDelete()}>
          <SVG.Delete />
        </Button>
      </ProjectTitle>
      {project.tasks.map((task: task) => {
        return <Task task={task} days={days} key={task.id} monthName={monthName} />
      })}
      {newTask ? (
        <TaskForum task={plankTask} days={days} editModeState={(e: boolean) => setNewTask(e)} />
      ) : (
        <AddTask data-testid="add-new-task-button" onClick={() => setNewTask(true)}>
          <SVG.AddTask /> Add New Task
        </AddTask>
      )}
    </Holder>
  )
}
interface projectEdit {
  title: string
  color: string
}
const ProjectEdit: React.FC<projectEdit> = ({ title, color }) => {
  const initialValues = { title, color }
  const validation = yup.object().shape({
    title: yup.string().required(),
  })
  function handleEdit() {}
  const Holder = styled.div``
  const FieldContainer = styled.div``
  const Error = styled.div``
  return (
    <Holder data-testid="project-edit-form">
      <Formik
        validationSchema={validation}
        initialValues={initialValues}
        onSubmit={() => handleEdit()}
      >
        <Form>
          <FieldContainer data-testid="project-edit-title">
            <Field name="title" type="text" />
            <ErrorMessage component={Error} name="title" />
          </FieldContainer>
        </Form>
      </Formik>
    </Holder>
  )
}

const Holder = styled.div`
  margin: 1vw 0.3vw 1vw 1.1vw;
`
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${font.bold};
  font-size: 1.05vw;
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
const Color = styled.span`
  position: relative;
  left: -1vw;
  width: 17px;
  height: 17px;
  border-radius: 0.2vw;

  /* margin-left: -0.4vw; */
`
const Item = styled.span`
  width: 5vw;
  white-space: nowrap;
  &:nth-of-type(1) {
    width: 12.2vw;
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
