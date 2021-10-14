import * as React from "react"
import styled from "@emotion/styled"
import Inputforum from "./input-forum/Inputforum"
import OutputCard from "./output-card/OutputCard"

function Cards() {
  return (
    <Section id="cards-container" data-test="cards-container">
      <Inputforum />
      <OutputCard />
    </Section>
  )
}
const Section = styled.section`
  position: absolute;
  width: 93.8vw;
  height: 95vh;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default Cards
