import { setup } from "@utils"
import Bar from "./Bar"
import { screen } from "@testing-library/react"

describe("<Bar/> Render Important Parts", () => {
  beforeEach(() => {
    setup(<Bar percentage={30} startDate={3} endDate={10} color="#fee222" />)
  })
  it("should Render Bar Body", () => {
    const bar = screen.getByTestId("bar")
    expect(bar).toBeInTheDocument()
  })
  it("should Render Percentage", () => {
    const percentage = screen.getByTestId("bar-percentage")
    expect(percentage).toBeInTheDocument()
  })
})
