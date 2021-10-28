import styled from "@emotion/styled"
import { task } from "@types"
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { editTask, addTask } from "@redux_local/ganttSlice"
import SVG from "@assets/svg"
import theme from "@style"
import { useEffect, useRef } from "react"
const color = theme.gantt.color
const font = theme.gantt.font

interface component {
  task: task
  days: number
  editModeState: Function
  editOrNew: "edit" | "new"
  idsArray: [number, string, string]
}
const TaskForum: React.FC<component> = ({ task, days, editModeState, idsArray, editOrNew }) => {
  const dispatch = useDispatch()
  const titleRef = useRef(null)

  useEffect(() => {
    titleRef.current.focus()
  }, [])
  let Days: any[] = []
  for (let i = 0; i < days; i++) {
    Days.push(<option key={i}>{i + 1}</option>)
  }
  const initialValues = {
    title: task.title,
    startDate: task.startDate,
    endDate: task.endDate,
    percentage: task.percentage,
  }
  const validation = yup.object().shape({
    title: yup.string().required("Required!"),
    startDate: yup.number().lessThan(yup.ref("endDate")),
    endDate: yup.number().moreThan(yup.ref("startDate")),
    percentage: yup.number().required("Required!").max(100).min(0),
  })
  function handelSubmit(data: any) {
    if (editOrNew === "edit") {
      dispatch(
        editTask({
          ids: idsArray,
          ...data,
        })
      )
    }
    if (editOrNew === "new") {
      dispatch(
        addTask({
          ids: idsArray,
          ...data,
        })
      )
    }
    handelCancel()
  }
  function handelCancel() {
    editModeState(false)
  }
  return (
    <Holder data-testid="task-forum">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(value: any) => handelSubmit(value)}
      >
        <Form>
          <FiledHolder data-testid="task-form-title">
            <Field type="text" name="title">
              {({ field, meta }: FieldProps) => {
                return (
                  <input
                    placeholder="Task Title"
                    ref={titleRef}
                    type="text"
                    {...field}
                    className={`${meta.touched && meta.error ? "error" : ""}`}
                  />
                )
              }}
            </Field>
          </FiledHolder>
          <FiledHolder data-testid="task-form-start-date">
            <Field as="select" name="startDate">
              {({ field, meta }: FieldProps) => {
                return (
                  <select {...field} className={`${meta.touched && meta.error ? "error" : ""}`}>
                    {Days}
                  </select>
                )
              }}
            </Field>
          </FiledHolder>
          <FiledHolder data-testid="task-form-end-date">
            <Field as="select" name="endDate">
              {({ field, meta }: FieldProps) => {
                return (
                  <select {...field} className={`${meta.touched && meta.error ? "error" : ""}`}>
                    {Days}
                  </select>
                )
              }}
            </Field>
          </FiledHolder>
          <FiledHolder data-testid="task-form-percentage">
            <Field name="percentage" type="number" max="100" min="0">
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
          <button data-testid="task-forum-save-button" type="submit">
            <SVG.Check />
          </button>
          <button data-testid="task-forum-cancel-button" onClick={() => handelCancel()}>
            <SVG.Cross />
          </button>
        </Form>
      </Formik>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button {
    opacity: 0.6;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    padding: 0.2vw;
  }
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
    padding-left: 1vw;
  }
  input[type="number"] {
    width: 2.1vw;
    text-align: center;
  }
  select {
    font-size: 0.9vw;
    padding: 0;
    margin-right: 0.9vw;
    height: 3.7vh;
    text-align: center;
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
  svg {
    pointer-events: none;
    width: 1.2vw;
  }

  .error {
    border: 0.15vw solid ${color.red};
    color: ${color.red};
  }
`
const FiledHolder = styled.div``

export default TaskForum
