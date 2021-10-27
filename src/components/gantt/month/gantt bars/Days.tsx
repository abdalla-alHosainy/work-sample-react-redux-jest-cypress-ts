import styled from "@emotion/styled"
import { project } from "@types"
import _ from "lodash"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface projects {
  projects: project[]
  days: number
}
const Days: React.FC<projects> = ({ projects, days }) => {
  return <Holder></Holder>
}
const Holder = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 67vw;
  background-color: #ff7e7e;
`

export default Days
