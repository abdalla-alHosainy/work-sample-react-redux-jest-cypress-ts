import styled from "@emotion/styled"
import { Form, Formik, Field, FieldProps } from "formik"
import * as yup from "yup"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { editProject } from "@redux_local/ganttSlice"
import SVG from "@assets/svg"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface component {
  projectTitle: string
  projectColor: string
  projectId: string
  monthId: number
  setEditMode: Function
}
const ProjectEdit: React.FC<component> = ({
  projectTitle,
  projectColor,
  monthId,
  projectId,
  setEditMode,
}) => {
  const initialValues = { projectTitle, projectColor }
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
  }, [])
  const dispatch = useDispatch()

  function handleEdit(data: object) {
    dispatch(editProject({ ids: [monthId, projectId], ...data }))
    setEditMode(false)
  }
  return (
    <Holder data-testid="project-edit-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(data: object) => handleEdit(data)}
      >
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
          <button data-testid="task-forum-save-button" type="submit">
            <SVG.Check />
          </button>
          <button data-testid="task-forum-cancel-button" onClick={() => setEditMode(false)}>
            <SVG.Cross />
          </button>
        </Form>
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
    margin-right: 0.7vw;
    height: 3.7vh;
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
    svg {
      width: 1.5vw;
    }
    &:hover {
      opacity: 1;
    }
  }
  .error {
    border: 0.15vw solid ${color.red};
    color: ${color.red};
  }
`
const FiledHolder = styled.div``
export default ProjectEdit
