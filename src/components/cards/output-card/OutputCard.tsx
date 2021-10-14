import * as React from "react"
import styled from "@emotion/styled"
import theme from "../../../style"
import { useSelector } from "react-redux"
import { TStore } from "../../../redux/store"
import pressCard from "../../../assets/images/press.png"
import securityCard from "../../../assets/images/security.png"
import visitorCard from "../../../assets/images/visitor.png"
import stuffCard from "../../../assets/images/stuff.png"
const font = theme.cards.font
function changeTextColor(type: string) {
  const root = document.querySelector(":root") as HTMLElement
  const cardColor =
    type === "stuff"
      ? "#000000"
      : type === "press"
      ? "#1900FF"
      : type === "security"
      ? "#FF0000"
      : "#8800FF"
  root.style.setProperty("--card-color", cardColor)
}
const OutputCard = () => {
  const { fullName, accessLevel, currentPosition, image } = useSelector(
    (state: TStore) => state.cardsReducer
  )
  changeTextColor(accessLevel)
  return (
    <Holder>
      <div className="card-face">
        <FullName>{fullName}</FullName>
        <CurrentPosition>{currentPosition}</CurrentPosition>
        <Image src={image} />
      </div>
      <div className="card-back">
        <FullNameRotated>{fullName}</FullNameRotated>
      </div>
      <CardsHolder>
        {accessLevel === "stuff" ? (
          <Card data-test-id="stuff-card-image" src={stuffCard} />
        ) : accessLevel === "security" ? (
          <Card data-test-id="security-card-image" src={securityCard} />
        ) : accessLevel === "visitor" ? (
          <Card data-test-id="visitor-card-image" src={visitorCard} />
        ) : (
          <Card data-test-id="press-card-image" src={pressCard} />
        )}
      </CardsHolder>
    </Holder>
  )
}

const Holder = styled.div`
  position: relative;
  height: 100%;
  width: 70vw;
  .card-face {
    position: absolute;
    bottom: 7.5vh;
    left: 33.95%;
    transform: translateX(-47%);
    z-index: 3;
    width: 17vw;
    height: 27vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* background-color: #ff5050;
    opacity: 0.6; */
  }
  .card-back {
    position: absolute;
    bottom: 7.5vh;
    left: 56.5%;
    z-index: 3;
    width: 4.5vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #ff5050;
    opacity: 0.6; */
  }
`
const FullName = styled.h1`
  position: absolute;
  top: 55%;
  ${font.bold}
  font-size: 1.9vw;
  letter-spacing: -0.15vw;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  color: var(--card-color);
`
const FullNameRotated = styled.h1`
  ${font.bold}
  position: absolute;
  left: -169%;
  font-size: 2.6vw;
  line-height: 0;
  letter-spacing: -0.15vw;
  transform: rotate(-90deg);
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  color: var(--card-color);
  width: 20vw;
`
const CurrentPosition = styled.span`
  position: absolute;
  top: 70%;
  ${font.regular}
  font-size: 1vw;
  letter-spacing: 0.2vw;
  text-transform: capitalize;
  color: var(--card-color);
`
const DateNumber = styled.span`
  color: var(--card-color);
`
const Image = styled.img`
  position: absolute;
  top: 23.3%;
  clip-path: circle(4.5vw);
  width: 20vw;
`
const CardsHolder = styled.div`
  position: absolute;
  bottom: 7vh;
  left: 50%;
  transform: translateX(-47%);
`
const Card = styled.img`
  width: 41vw;
`
export default OutputCard
