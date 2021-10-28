import styled from "@emotion/styled"
import { Formik, Form, Field, FieldProps } from "formik"
import { useEffect, useRef } from "react"
import { darken } from "polished"
import { useDispatch } from "react-redux"
import { addProject } from "@redux_local/ganttSlice"
import theme from "@style"
import * as yup from "yup"
const color = theme.gantt.color
const font = theme.gantt.font

const initialValues = {
  projectTitle: "",
  projectColor: "cyan",
  taskTitle: "",
  taskStartDate: "1",
  taskEndDate: "2",
  taskPercentage: 0,
}
const validation = yup.object().shape({
  projectTitle: yup.string().required(),
  taskTitle: yup.string().required(),
  taskStartDate: yup.number().lessThan(yup.ref("taskEndDate")),
  taskEndDate: yup.number().moreThan(yup.ref("taskStartDate")),
  taskPercentage: yup.number().required("Required!").max(100).min(0),
})
const colorOptions = ["cyan", "green", "blue", "purple", "red", "orange", "black", "yellow", "pink"]

interface component {
  month: any
  setNewProjectState: Function
}
const ProjectNew: React.FC<component> = ({ month, setNewProjectState }) => {
  let Days: any[] = []
  for (let i = 0; i < month.days; i++) {
    Days.push(<option key={i}>{i + 1}</option>)
  }
  const titleRef = useRef(null)

  useEffect(() => {
    titleRef.current.focus()
  }, [])
  const dispatch = useDispatch()
  function handelSubmit(data: object) {
    dispatch(addProject({ id: [month.id], ...data }))
    setNewProjectState(false)
  }
  return (
    <Holder data-testid="new-project-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(data: object) => handelSubmit(data)}
      >
        <Form>
          <Row>
            <FiledHolder data-testid="new-project-title">
              <label htmlFor="projectTitle">Project Title</label>
              <Field type="text" name="projectTitle">
                {({ field, meta }: FieldProps) => {
                  return (
                    <input
                      ref={titleRef}
                      type="text"
                      {...field}
                      placeholder="Project Title"
                      className={`${meta.touched && meta.error ? "error" : ""}`}
                    />
                  )
                }}
              </Field>
            </FiledHolder>
            <FiledHolder data-testid="new-project-title">
              <label htmlFor="projectColor">Project Color</label>

              <Field type="text" name="projectColor">
                {({ field, meta }: FieldProps) => {
                  return (
                    <select
                      {...field}
                      className={`${meta.touched && meta.error ? "error" : ""} color`}
                      style={{ backgroundColor: field.value }}
                    >
                      {colorOptions.map(colorItem => (
                        <option
                          key={colorItem}
                          value={colorItem}
                          style={{ backgroundColor: color[colorItem] }}
                        >
                          {colorItem}
                        </option>
                      ))}
                    </select>
                  )
                }}
              </Field>
            </FiledHolder>
          </Row>
          <Row>
            <FiledHolder data-testid="new-project-task-title">
              <label htmlFor="taskTitle">Task Title</label>
              <Field type="text" name="taskTitle">
                {({ field, meta }: FieldProps) => {
                  return (
                    <input
                      type="text"
                      {...field}
                      placeholder="Task Title"
                      className={`${meta.touched && meta.error ? "error" : ""}`}
                    />
                  )
                }}
              </Field>
            </FiledHolder>
            <FiledHolder data-testid="new-project-task-start-date">
              <label htmlFor="taskStartDate">Start</label>
              <Field as="select" name="taskStartDate">
                {({ field, meta }: FieldProps) => {
                  return (
                    <select {...field} className={`${meta.touched && meta.error ? "error" : ""}`}>
                      {Days}
                    </select>
                  )
                }}
              </Field>
            </FiledHolder>
            <FiledHolder data-testid="new-project-task-end-date">
              <label htmlFor="taskEndDate">End </label>
              <Field as="select" name="taskEndDate">
                {({ field, meta }: FieldProps) => {
                  return (
                    <select {...field} className={`${meta.touched && meta.error ? "error" : ""}`}>
                      {Days}
                    </select>
                  )
                }}
              </Field>
            </FiledHolder>
            <FiledHolder data-testid="new-project-task-percentage">
              <label htmlFor="taskPercentage">Perc</label>
              <Field name="taskPercentage" type="number" max="100" min="0">
                {({ field, meta }: FieldProps) => {
                  return (
                    <input
                      type="number"
                      {...field}
                      className={`${meta.touched && meta.error ? "error" : ""}`}
                    />
                  )
                }}
              </Field>
            </FiledHolder>
          </Row>
          <Row>
            <Button data-testid="new-project-add-button">Add</Button>
            <Button data-testid="new-project-add-button" onClick={() => setNewProjectState(false)}>
              Cancel
            </Button>
          </Row>
        </Form>
      </Formik>
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
    background-color: ${darken(0.2, color.green)};
    &:hover {
      background-color: ${color.green};
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
