import * as React from "react"
import styled from "@emotion/styled"

function Cards() {
  return (
    <Section id="cards-container" data-test="cards-component">
      <h1 className={"class"} data-test-id="testing">
        Test a text
      </h1>
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
