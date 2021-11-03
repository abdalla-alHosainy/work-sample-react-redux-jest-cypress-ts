import styled from "@emotion/styled"
import { lighten } from "polished"
import theme from "@style"
const themeColor = theme.gantt.color
const font = theme.gantt.font
interface component {
  percentage: number | string
  color: string
  startDate: any
  endDate: any
  days: number
  title: string
  willDelete: boolean
}
const Bar: React.FC<component> = ({ percentage, color, startDate, endDate, title, willDelete }) => {
  function left() {
    const unit = 2.194
    return `${unit * startDate - unit}vw`
  }
  function width() {
    const unit = 2.194
    return `${unit * (endDate - startDate)}vw`
  }
  // console.log(themeColor[color])
  // // console.log(color)

  return (
    <Holder
      data-testid="bar"
      style={{
        backgroundColor: lighten(0.3, color),
        left: left(),
        width: width(),
      }}
    >
      <Dashed style={{ opacity: willDelete ? 1 : 0 }} />
      <div className="title">{title}</div>
      <Percentage
        data-testid="bar-percentage"
        style={{ backgroundColor: color, width: `${percentage}%` }}
      >
        <span>{percentage}%</span>
      </Percentage>
    </Holder>
  )
}
const Holder = styled.div`
  position: relative;
  height: 3vh;
  border-radius: 1vw;
  overflow: hidden;
  margin: 1vh 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    text-align: center;
    z-index: 1;
    ${font.bold};
    color: #00000049;
    font-size: 0.9vw;
    white-space: nowrap;
  }
  &:nth-of-type(2) {
    border-radius: 0.8vw 0.8vw 0vw 0vw !important;
    padding: 0.2vh 0vh;
  }
`

const Percentage = styled.span`
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  height: 100%;
  color: ${themeColor.white};
  ${font.bold};
  font-size: 0.9vw;
`
const Dashed = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    #000000 5px,
    #000000 5px
  );
`
export default Bar
