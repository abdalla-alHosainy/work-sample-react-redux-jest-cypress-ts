import styled from "@emotion/styled"
import { month } from "@types"
import { useFormik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { editTask, addTask } from "@redux_local/ganttSlice"
import SVG from "@assets/svg"
import theme from "@style"
import { useEffect, useRef } from "react"
import _ from "lodash"
const color = theme.gantt.color
const font = theme.gantt.font

interface component {
  visible: Function
  editOrNew: "edit" | "new"
  ids: [number, string, string]
  month: month
}
const TaskForum: React.FC<component> = ({ month, visible, ids, editOrNew }) => {
  useEffect(() => {
    titleRef.current.focus()
  }, [])

  const titleRef = useRef(null)
  const task = _.find(_.find(month.projects, { id: ids[1] }).tasks, { id: ids[2] })

  const daysOptions = () => {
    let Days: any[] = []
    for (let i = 0; i < month.days; i++) {
      Days.push(<option key={i}>{i + 1}</option>)
    }
    return Days
  }
  const dispatch = useDispatch()
  const isEdit = editOrNew === "edit"
  const { isValid, handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      title: isEdit ? task.title : "",
      startDate: isEdit ? task.startDate : "1",
      endDate: isEdit ? task.endDate : "2",
      percentage: isEdit ? task.percentage : 0,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Required!"),
      startDate: yup.number().lessThan(yup.ref("endDate")),
      endDate: yup.number().moreThan(yup.ref("startDate")),
      percentage: yup.number().required("Required!").max(100).min(0),
    }),
    onSubmit: value => {
      if (editOrNew === "edit") {
        dispatch(
          editTask({
            ids,
            ...value,
          })
        )
      }
      if (editOrNew === "new") {
        dispatch(
          addTask({
            ids,
            ...value,
          })
        )
      }
      visible(false)
    },
  })
  return (
    <Holder data-testid="task-forum">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task Title"
          ref={titleRef}
          name="title"
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.title}
          className={`${touched.title && errors.title ? "error" : ""}`}
        />
        <select
          data-testid="task-form-start-date"
          name="startDate"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.startDate}
          className={`${touched.startDate && errors.startDate ? "error" : ""}`}
        >
          {daysOptions()}
        </select>
        <select
          name="endDate"
          data-testid="task-form-end-date"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.endDate}
          className={`${touched.endDate && errors.endDate ? "error" : ""}`}
        >
          {daysOptions()}
        </select>
        <input
          type="number"
          max="100"
          min="0"
          name="percentage"
          data-testid="task-form-percentage"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.percentage}
          className={`${touched.percentage && errors.percentage ? "error" : ""}`}
        />
        <button data-testid="task-forum-save-button" type="submit" disabled={!isValid}>
          <SVG.Check />
        </button>
        <button data-testid="task-forum-cancel-button" onClick={() => visible(false)}>
          <SVG.Cross />
        </button>
      </form>
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
    &:nth-of-type(1) svg {
      fill: #189f25;
    }
    &:nth-of-type(2) svg {
      fill: red;
    }
    &:hover {
      opacity: 1;
    }
    padding: 0.2vw;
    &:disabled {
      cursor: default;
      opacity: 0.8;
      svg {
        fill: ${color.gray};
      }
    }
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

export default TaskForum
