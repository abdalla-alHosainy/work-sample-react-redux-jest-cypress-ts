import * as React from "react"
import { Field, ErrorMessage, FieldProps } from "formik"
import styled from "@emotion/styled"
import theme from "../../style"
import { InputType } from "zlib"
const color = theme.layout.color
const font = theme.layout.font

function SelectInput(props: any) {
  const { label, name, options, ...rest } = props
  return (
    <Holder data-test-id={name}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name}>
        {({ meta, field }: FieldProps) => {
          const hasError = meta.error && meta.touched ? "error" : undefined
          return (
            <select {...rest} data-test-id={name + "-input"} {...field} className={hasError}>
              {options.map((option: any) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })}
            </select>
          )
        }}
      </Field>
      <ErrorMessage component={Error} name={name} data-test-id={name + "-error"} />
    </Holder>
  )
}
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  margin: 0.8em 0em;
  label {
    font-size: 1.5em;
    ${font.bold};
    color: ${color.black};
  }
  select {
    font-size: 1em;
    outline: none;
    border: 0.11em solid ${color.gray};
    background-color: transparent;
    border-radius: 0.3em;
    padding: 0.2em 0.7em;
    /* width: 54%; */
    line-height: 0.5;
    cursor: pointer;
    ${font.regular}
    background-color: transparent;
    /* margin-right: 1em; */
    &:focus {
      border: 0.11em solid ${color.black};
    }
    &:hover {
      background-color: ${color.lightGray};
    }
    &.error {
      border: 0.11em solid red;
      color: red;
    }
  }
`
const Error = styled.span`
  ${font.regular}
  font-size: 1em;
  color: red;
`

export default SelectInput
