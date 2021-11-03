import styled from "@emotion/styled"
import { month } from "@types"
import { useFormik } from "formik"
import * as yup from "yup"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { editProject } from "@redux_local/ganttSlice"
import _ from "lodash"
import SVG from "@assets/svg"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface component {
  month: month
  ids: [number, string]
  visible: Function
}
const ProjectEdit: React.FC<component> = ({ ids, month, visible }) => {
  useEffect(() => {
    titleRef.current.focus()
  }, [])
  const titleRef = useRef(null)
  const project = _.find(month.projects, { id: ids[1] })

  const colorOptions = () => {
    const colors = ["cyan", "green", "blue", "purple", "red", "orange", "black", "yellow", "pink"]
    return colors.map(colorItem => (
      <option key={colorItem} value={colorItem} style={{ backgroundColor: color[colorItem] }}>
        {colorItem}
      </option>
    ))
  }

  const dispatch = useDispatch()
  const { handleBlur, handleChange, handleSubmit, values, isValid, errors, touched } = useFormik({
    initialValues: { projectTitle: project.title, projectColor: project.color },
    validationSchema: yup.object().shape({
      projectTitle: yup.string().required(),
    }),
    onSubmit: values => {
      dispatch(editProject({ ids: [month.id, project.id], ...values }))
      visible(false)
    },
  })

  return (
    <Holder data-testid="edit-project-form">
      <form onSubmit={handleSubmit}>
        <input
          data-testid="edit-project-title"
          ref={titleRef}
          type="text"
          name="projectTitle"
          placeholder="Project Title"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.projectTitle}
          className={`${touched.projectTitle && errors.projectTitle ? "error" : ""}`}
        />
        <select
          name="projectColor"
          data-testid="edit-project-color"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.projectColor}
          className={`${touched.projectColor && errors.projectColor ? "error" : ""} color`}
          style={{ backgroundColor: color[values.projectColor] }}
        >
          {colorOptions()}
        </select>
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
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    padding-left: 0.6vw;
  }
  input[type="number"] {
    width: 2.1vw;
  }
  select {
    font-size: 0.9vw;
    padding: 0;
    text-align: center;
    margin-right: 0.6vw;
    height: 3.7vh;
    cursor: pointer;
    /* padding: 0 4.1vw; */
    option {
      color: #000;
    }
    &.color {
      width: 6.2vw;
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
  button {
    border: none;
    background: none;
    opacity: 0.6;
    cursor: pointer;
    &:nth-of-type(1) svg {
      fill: #189f25;
    }
    &:nth-of-type(2) svg {
      fill: red;
    }
    svg {
      width: 1.5vw;
    }
    &:hover {
      opacity: 1;
    }
    &:disabled {
      cursor: default;
      opacity: 0.8;
      svg {
        fill: ${color.gray};
      }
    }
  }
  .error {
    border: 0.15vw solid ${color.red};
    color: ${color.red};
  }
`
export default ProjectEdit
