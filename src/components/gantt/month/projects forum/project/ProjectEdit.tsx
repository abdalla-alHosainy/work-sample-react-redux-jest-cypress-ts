import styled from "@emotion/styled"
import { month } from "@types"
import { Form, Formik, Field, FieldProps } from "formik"
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
  const project = _.find(month.projects, p => p.id === ids[1])
  const initialValues = { projectTitle: project.title, projectColor: project.color }
  const validation = yup.object().shape({
    projectTitle: yup.string().required(),
  })
  const titleRef = useRef(null)
  const colorOptions = [
    "cyan",
    "green",
    "blue",
    "purple",
    "red",
    "orange",
    "black",
    "yellow",
    "pink",
  ]
  useEffect(() => {
    titleRef.current.focus()
    document.addEventListener("keyup", e => e.key === "Escape" && visible(false), false)
  }, [])
  const dispatch = useDispatch()

  function handleEdit(data: object) {
    dispatch(editProject({ ids: [month.id, project.id], ...data }))
    visible(false)
  }
  return (
    <Holder data-testid="project-edit-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(data: object) => handleEdit(data)}
      >
        {formik => (
          <Form>
            <FiledHolder data-testid="new-project-title">
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
              <Field type="text" name="projectColor">
                {({ field, meta }: FieldProps) => {
                  return (
                    <select
                      {...field}
                      className={`${meta.touched && meta.error ? "error" : ""} color`}
                      style={{ backgroundColor: color[field.value] }}
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
            <button data-testid="task-forum-save-button" type="submit" disabled={!formik.isValid}>
              <SVG.Check />
            </button>
            <button data-testid="task-forum-cancel-button" onClick={() => visible(false)}>
              <SVG.Cross />
            </button>
          </Form>
        )}
      </Formik>
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
const FiledHolder = styled.div``
export default ProjectEdit
