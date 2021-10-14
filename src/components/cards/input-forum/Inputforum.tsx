import React from "react"
import styled from "@emotion/styled"
import theme from "../../../style"
import DraggableImage from "./draggable-image/DraggableImage"
import { Formik, Form, FormikProps } from "formik"
import * as Yup from "yup"
import Input from "../../../layout/forum/Input"
import SelectInput from "../../../layout/forum/SelectInput"
import { useDispatch } from "react-redux"
import { setForumData } from "../../../redux/cardSlice"

const color = theme.cards.color
const font = theme.cards.font

const initialValues = {
  fullName: "",
  currentPosition: "",
  activationDate: {
    startDate: "",
    endDate: "",
  },
  accessLevel: "",
}
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required!"),
  currentPosition: Yup.string().required("Required!"),
  activationDate: Yup.object({
    startDate: Yup.date().required("Required!").nullable(),
    endDate: Yup.date().required("Required!").nullable(),
  }),
  accessLevel: Yup.string().required("Required!"),
})
const accessLevelOptions = [
  { key: "Stuff", value: "stuff" },
  { key: "Security", value: "security" },
  { key: "Visitor", value: "visitor" },
  { key: "Press", value: "press" },
]
// const onSubmit = () => {}
interface submitOnChange {
  formik: any
}
const HandleChange: React.FC<submitOnChange> = ({ formik }) => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    console.log(formik.values)
    dispatch(setForumData(formik.values))
  }, [formik])
  return <></>
}
const Inputforum = () => {
  return (
    <Holder>
      <Label htmlFor="image">Select Image</Label>
      <DraggableImage />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
        {formik => (
          <Form>
            <Input name="fullName" type="text" placeholder="Full Name" label="Full Name" />
            <Input
              name="currentPosition"
              type="text"
              placeholder="Current Position"
              label="Current Position"
            />
            <SelectInput name="accessLevel" label="Access Level" options={accessLevelOptions} />
            <HandleChange formik={formik} />
          </Form>
        )}
      </Formik>
    </Holder>
  )
}
const Holder = styled.div`
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  background-color: ${color.offWhite};
  height: 100%;
  width: 17em;
  padding: 4em 2.5em 0em 2.2em;
`
const Label = styled.label`
  color: ${color.black};
  font-size: 1.6vw;
  ${font.bold};
`
const ImageDrop = styled.div``
export default Inputforum
