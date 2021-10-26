import styled from "@emotion/styled"
import Month from "./month/Month"
import { useSelector } from "react-redux"
import { ganttReducer } from "@redux_local/ganttSlice"
import { TStore } from "@redux_local/store"
const Gantt = () => {
  const state = useSelector((state: TStore) => state.ganttReducer)
  return (
    <Section id="gantt-container">
      <Month month={state[0]} />
    </Section>
  )
}
const Section = styled.section`
  position: absolute;
  width: 93.8vw;
  height: 95vh;
  overflow: hidden;
  background-color: #fff;
`

export default Gantt
