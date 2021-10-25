import * as React from "react"
import Cards from "./components/cards/cards"
import styled from "@emotion/styled"
import theme from "@style"
import SVG from "./assets/svg"
import Hero from "./components/hero/Hero"
import Gantt from "./components/gantt/Gantt"
import Charts from "./components/charts/Charts"
const color = theme.app.color
const slidesColor = [
  {
    bgColor: color.black,
    mainColor: color.white,
  },
  {
    bgColor: color.black,
    mainColor: color.white,
  },
  {
    bgColor: color.blue,
    mainColor: color.white,
  },
  {
    bgColor: color.violet,
    mainColor: color.white,
  },
]
interface button {
  id: string
  href?: string
  index?: number
}
const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  function handleClick(element: EventTarget) {
    type btn = "home-btn" | "cards-btn" | "gantt-btn" | "charts-btn"
    type container = "hero-container" | "cards-container" | "gantt-container" | "charts-container"
    const el = element as HTMLElement
    const parent = el.parentNode
    const ID = el.getAttribute("id") as btn
    function hideSlide(id: container) {
      const el = document.querySelector(`#${id}`) as HTMLElement
      el.style.display = "none"
    }
    function show(id: container) {
      const el = document.querySelector(`#${id}`) as HTMLElement
      el.style.display = "flex"
    }
    function changeColor(index: number) {
      const root = document.querySelector(":root") as HTMLElement
      root.style.setProperty("--main-color", slidesColor[index].mainColor)
      root.style.setProperty("--bg-color", slidesColor[index].bgColor)
    }

    switch (ID) {
      case "home-btn":
        changeColor(0)
        setActiveSlide(0)
        hideSlide("cards-container")
        hideSlide("gantt-container")
        hideSlide("charts-container")
        show("hero-container")
        break
      case "cards-btn":
        changeColor(1)
        setActiveSlide(1)
        hideSlide("hero-container")
        hideSlide("gantt-container")
        hideSlide("charts-container")
        show("cards-container")
        break
      case "gantt-btn":
        changeColor(2)
        setActiveSlide(2)
        hideSlide("hero-container")
        hideSlide("cards-container")
        hideSlide("charts-container")
        show("gantt-container")
        break
      case "charts-btn":
        changeColor(3)
        setActiveSlide(3)
        hideSlide("hero-container")
        hideSlide("cards-container")
        hideSlide("gantt-container")
        show("charts-container")
        break
    }
  }
  const Button: React.FC<button> = ({ id, children, href, index }) => {
    const active = index === activeSlide ? "active" : ""
    return href ? (
      <Github href={href} id={id} data-test-id={id} target="_blank">
        <SVG.Github />
      </Github>
    ) : (
      <ButtonHolder
        id={id}
        data-test-id={id}
        onClick={e => handleClick(e.target)}
        className={active}
      >
        {children}
      </ButtonHolder>
    )
  }
  return (
    <Main className="App" data-test-id="app">
      <Sidebar data-test-id="sidebar">
        <Button id="home-btn" index={0}>
          <SVG.Home />
        </Button>
        <Button id="cards-btn" index={1}>
          <SVG.Card />
        </Button>
        <Button id="gantt-btn" index={2}>
          <SVG.Gantt />
        </Button>
        <Button id="charts-btn" index={3}>
          <SVG.Chart />
        </Button>
        <Button id="github-btn" href="https://github.com/abdalla-alHosainy/" />
      </Sidebar>
      <Holder>
        <Hero />
        <Cards />
        <Gantt />
        <Charts />
      </Holder>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-color);
  font-size: 1vw;
`
const Holder = styled.div`
  font-size: 1em;
  position: relative;
  overflow: hidden;
  width: 93.8vw;
  height: 95vh;
  background-color: ${color.white};
  /* background-color: #000; */
  border-radius: 0.6em;
`
const Sidebar = styled.div`
  font-size: 1em;
  width: 5em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ButtonHolder = styled.div`
  font-size: 1em;
  padding: 1em;
  margin: 1em 0em;
  border: 0.2em solid transparent;
  border-radius: 0.3em;
  cursor: pointer;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7;

  svg {
    fill: var(--main-color);
    pointer-events: none;
  }
  &:hover {
    border: 0.2em solid var(--main-color);
  }
  &.active {
    background-color: var(--main-color);
    border: 0.2em solid var(--main-color);
    svg {
      fill: var(--bg-color);
    }
  }
  &:nth-of-type(1) {
    position: absolute;
    top: 2vh;
    width: auto;
    height: auto;
    border: none;
    svg {
      width: 2.1em !important;
      pointer-events: none;
    }
  }
`
const Github = styled.a`
  position: absolute;
  bottom: 4vh;
  width: auto;
  height: auto;
  svg {
    width: 2.5em !important;
    fill: var(--main-color);
  }
`

export default App
