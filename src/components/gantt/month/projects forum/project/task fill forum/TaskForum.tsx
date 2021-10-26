import styled from "@emotion/styled"
import { task } from "@types"
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik"
import * as yup from "yup"
import { useState } from "react"

interface component {
  task: task
  days: number
  editModeState: Function
}
const TaskForum: React.FC<component> = ({ task, days, editModeState }) => {
  let Days = []
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
  function handelSubmit() {}
  function handelCancel() {
    editModeState(false)
  }
  return (
    <Holder data-testid="task-forum">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={() => handelSubmit()}
      >
        <Form>
          <FiledHolder data-testid="task-form-title">
            <Field type="text" name="title">
              {({ field, meta }: FieldProps) => {
                return (
                  <input
                    type="text"
                    {...field}
                    className={`${meta.touched && meta.error ? "error" : ""}`}
                  />
                )
              }}
            </Field>
            <ErrorMessage name="title" data-testid="task-form-title-error" />
          </FiledHolder>
          <FiledHolder data-testid="task-form-start-date">
            <Field as="select" name="startDate">
              {Days}
            </Field>
            <ErrorMessage name="startDate" component={Error} />
          </FiledHolder>
          <FiledHolder data-testid="task-form-end-date">
            <Field as="select" name="endDate">
              {Days}
            </Field>
            <ErrorMessage name="endDate" component={Error} />
          </FiledHolder>
          <FiledHolder data-testid="task-form-percentage">
            <Field name="percentage" type="number" max="100" min="0" />
            <ErrorMessage name="percentage" component={Error} />
          </FiledHolder>
          <Button data-testid="task-forum-save-button" type="submit">
            save
          </Button>
          <Button data-testid="task-forum-cancel-button" onClick={() => handelCancel()}>
            cancel
          </Button>
        </Form>
      </Formik>
    </Holder>
  )
}
const Holder = styled.div`
  form {
    display: flex;
    flex-direction: row;
  }

  button {
    opacity: 1 !important;
  }
`
const Error = styled.span``
const FiledHolder = styled.div``
const Button = styled.button``

export default TaskForum
