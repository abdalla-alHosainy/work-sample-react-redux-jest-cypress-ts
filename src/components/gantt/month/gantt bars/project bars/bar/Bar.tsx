import styled from "@emotion/styled"
import { lighten, darken } from "polished"
import theme from "@style"
const color = theme.gantt.color
const font = theme.gantt.font
interface component {
  percentage: number | string
  color: string
  startDate: any
  endDate: any
  days: number
  title: string
}
const Bar: React.FC<component> = ({ percentage, color, startDate, endDate, days, title }) => {
  function left() {
    const unit = (1 / days) * 100
    return `${unit * startDate - unit}%`
  }
  function width() {
    const unit = (1 / days) * 100
    return `${unit * (endDate - startDate)}%`
  }

  return (
    <Holder
      data-testid="bar"
      style={{
        backgroundColor: lighten(0.3, color),
        left: left(),
        width: width(),
      }}
    >
      <div className="title">{title}</div>
      <Percentage
        data-testid="bar-percentage"
        style={{ backgroundColor: color, width: `${percentage}%` }}
      >
        {percentage}%
      </Percentage>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  height: 3vh;
  border-radius: 1vw;
  overflow: hidden;
  margin: 1.1vh 0;
  .title {
    text-align: center;
    z-index: 1;
    ${font.bold};
    color: #00000049;
    font-size: 0.9vw;
  }
`

const Percentage = styled.span`
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  height: 100%;
  color: ${color.white};
  ${font.bold};
  font-size: 0.9vw;
`
export default Bar
