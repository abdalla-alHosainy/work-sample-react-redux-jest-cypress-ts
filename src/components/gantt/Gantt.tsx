import styled from "@emotion/styled"
import Month from "./month/Month"
import { useSelector } from "react-redux"
import { ganttReducer } from "@redux_local/ganttSlice"
import { TStore } from "@redux_local/store"
import { useState } from "react"
import SVG from "@assets/svg"
import theme from "@style"
import { lighten } from "polished"
const color = theme.gantt.color
const font = theme.gantt.font
const Gantt = () => {
  const [activeMonth, setActiveMonth] = useState(0)
  const state = useSelector((state: TStore) => state.ganttReducer)
  function goToNextMonth() {
    setActiveMonth((e: number) => ++e)
    console.log("nextMonth")
  }
  function goToPreviousMonth() {
    setActiveMonth((e: number) => --e)
    console.log("PrevMonth")
  }
  return (
    <Section id="gantt-container">
      <Title>Gantt Chart</Title>
      <MonthSelector>
        <button disabled={activeMonth === 0} onClick={() => goToPreviousMonth()}>
          <SVG.LeftArrow />
        </button>
        <span>{state[activeMonth].name}</span>
        <button disabled={activeMonth === 11} onClick={() => goToNextMonth()}>
          <SVG.RightArrow />
        </button>
      </MonthSelector>
      <Month month={state[activeMonth]} />
    </Section>
  )
}
const Section = styled.section`
  position: absolute;
  width: 93.8vw;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-size: 3vw;
  ${font.black}
  color: ${color.blue};
  letter-spacing: -0.03em;
  line-height: 0;
  z-index: 2;
`
const MonthSelector = styled.div`
  position: relative;
  display: flex;
  z-index: 3;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.2vw;
    color: ${color.gray};
    ${font.bold};
    width: 10vw;
    text-align: center;
  }
  background-color: ${color.offWhiteDark};
  width: 100%;
  padding: 0.6vw 0vw;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2vw;
    height: 2vw;
    background-color: ${lighten(0.55, color.blue)};
    cursor: pointer;
    border-radius: 50%;
    border: none;
    margin: 0vw 1vw;
    svg {
      pointer-events: none;
      width: 0.5vw;
      fill: ${lighten(0.2, color.blue)};
    }
    &:hover {
      background-color: ${lighten(0.45, color.blue)};
      svg {
        fill: ${color.blue} !important;
      }
    }
    &:disabled {
      opacity: 0.2;
    }
  }
`

export default Gantt
