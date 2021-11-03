import styled from "@emotion/styled"
import { Formik, Form, Field, FieldProps, useFormik } from "formik"
import { month } from "@types"
import { useEffect, useRef } from "react"
import { darken } from "polished"
import { useDispatch } from "react-redux"
import { addProject } from "@redux_local/ganttSlice"
import theme from "@style"
import * as yup from "yup"
const color = theme.gantt.color
const font = theme.gantt.font

interface component {
  month: month
  visible: Function
}
const ProjectNew: React.FC<component> = ({ month, visible }) => {
  const titleRef = useRef(null)
  const form = useRef(null)
  useEffect(() => {
    titleRef.current.focus()
    function clickAway(e) {
      if (form.current && !form.current.contains(e.target)) {
        visible(false)
      }
    }
    function keyUpEscape(e) {
      if (e.key === "Escape") {
        visible(false)
      }
    }
    document.addEventListener("keyup", keyUpEscape)
    document.addEventListener("mouseup", clickAway)
    return () => {
      document.removeEventListener("keyup", keyUpEscape)
      document.removeEventListener("mouseup", clickAway)
    }
  }, [])

  const daysOptions = () => {
    let Days: any[] = []
    for (let i = 0; i < month.days; i++) {
      Days.push(<option key={i}>{i + 1}</option>)
    }
    return Days
  }
  const colorOptions = () => {
    const colors = ["cyan", "green", "blue", "purple", "red", "orange", "black", "yellow", "pink"]
    return colors.map(colorItem => (
      <option key={colorItem} value={colorItem} style={{ backgroundColor: color[colorItem] }}>
        {colorItem}
      </option>
    ))
  }

  const dispatch = useDispatch()
  const { handleBlur, handleChange, handleSubmit, isValid, touched, errors, values } = useFormik({
    initialValues: {
      projectTitle: "",
      projectColor: "cyan",
      taskTitle: "",
      taskStartDate: "1",
      taskEndDate: "2",
      taskPercentage: 0,
    },
    validationSchema: yup.object().shape({
      projectTitle: yup.string().required(),
      taskTitle: yup.string().required(),
      taskStartDate: yup.number().lessThan(yup.ref("taskEndDate")),
      taskEndDate: yup.number().moreThan(yup.ref("taskStartDate")),
      taskPercentage: yup.number().required("Required!").max(100).min(0),
    }),
    onSubmit: values => {
      dispatch(addProject({ id: [month.id], ...values }))
      visible(false)
    },
  })

  return (
    <Holder data-testid="new-project-form">
      <form onSubmit={handleSubmit} ref={form}>
        <Row>
          <FiledHolder data-testid="new-project-title">
            <label htmlFor="projectTitle">Project Title</label>
            <input
              ref={titleRef}
              type="text"
              name="projectTitle"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.projectTitle}
              placeholder="Project Title"
              className={`${touched.projectTitle && errors.projectTitle ? "error" : ""}`}
            />
          </FiledHolder>
          <FiledHolder data-testid="new-project-color">
            <label htmlFor="projectColor">Project Color</label>
            <select
              name="projectColor"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.projectColor}
              style={{ backgroundColor: color[values.projectColor], color: "#fff" }}
            >
              {colorOptions()}
            </select>
          </FiledHolder>
        </Row>
        <Row>
          <FiledHolder data-testid="new-project-task-title">
            <label htmlFor="taskTitle">Task Title</label>
            <input
              type="text"
              name="taskTitle"
              placeholder="Task Title"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.taskTitle}
              className={`${touched.taskTitle && errors.taskTitle ? "error" : ""}`}
            />
          </FiledHolder>
          <FiledHolder data-testid="new-project-task-start-date">
            <label htmlFor="taskStartDate">Start</label>
            <select
              name="taskStartDate"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.taskStartDate}
              className={`${touched.taskStartDate && errors.taskStartDate ? "error" : ""}`}
            >
              {daysOptions()}
            </select>
          </FiledHolder>
          <FiledHolder data-testid="new-project-task-end-date">
            <label htmlFor="taskEndDate">End </label>
            <select
              name="taskEndDate"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.taskEndDate}
              className={`${touched.taskEndDate && errors.taskEndDate ? "error" : ""}`}
            >
              {daysOptions()}
            </select>
          </FiledHolder>
          <FiledHolder data-testid="new-project-task-percentage">
            <label htmlFor="taskPercentage">Perc</label>
            <input
              name="taskPercentage"
              type="number"
              max="100"
              min="0"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.taskPercentage}
              className={`${touched.taskPercentage && errors.taskPercentage ? "error" : ""}`}
            />
          </FiledHolder>
        </Row>
        <Row>
          <Button type="submit" data-testid="new-project-submit-button" disabled={!isValid}>
            Add
          </Button>
          <Button data-testid="new-project-cancel-button" onClick={() => visible(false)}>
            Cancel
          </Button>
        </Row>
      </form>
    </Holder>
  )
}
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  margin-left: 2.7vw;
  input,
  select,
  button {
    ${font.regular};
    font-size: 0.9vw;
    outline: none;
  }
  input[type="text"] {
    width: 8vw;
    margin-left: 0vw;
    margin-right: 1.7vw;
    padding-left: 0.6vw;
  }
  input[type="number"] {
    width: 2.1vw;
  }
  select {
    font-size: 0.9vw;
    padding: 0;
    text-align: center;
    /* margin-right: 0.9vw; */
    height: 3.7vh;
    option {
      color: #000;
    }
    &.color {
      width: 8.5vw;
      color: #fff !important;
      option {
        color: #fff;
      }
    }
    ${font.bold};
  }
  select,
  input {
    background-color: ${color.offWhite};
    border: solid 0.15vw ${color.gray};
    border-radius: 0.3vw;
    &:focus {
      border: 0.15vw solid #33a0ff;
      color: ${color.black};
    }
  }
  .error {
    border: 0.15vw solid ${color.red};
    color: ${color.red};
  }
`
const Button = styled.button`
  margin: 0.8vw;
  border-radius: 0.3vw;
  border: none;
  cursor: pointer;
  padding: 0.4vw 1.5vw;
  &:nth-of-type(1) {
    ${font.bold}
    font-size: 1.2vw;
    color: #fff;
    background-color: ${darken(0, color.green)};
    &:hover {
      background-color: ${darken(-0.1, color.green)};
    }
  }
  &:nth-of-type(2) {
    ${font.bold}
    font-size: 1.2vw;
    color: #fff;
    background-color: ${darken(-0.1, color.red)};
    &:hover {
      background-color: ${color.red};
    }
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
    background-color: ${color.gray} !important;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1vw 0vw;
`
const FiledHolder = styled.div`
  label {
    ${font.bold};
    font-size: 1vw;
    color: ${color.black};
    line-height: 2;
    margin-bottom: 0.5vw;
  }
`

export default ProjectNew
