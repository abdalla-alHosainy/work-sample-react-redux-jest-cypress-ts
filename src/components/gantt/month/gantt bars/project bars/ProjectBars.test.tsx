import { screen } from "@testing-library/react"
import { setup } from "@utils"
import ProjectBars from "./ProjectBars"
import { project } from "@types"
const projectTestData: project = {
  color: "#fee232",
  id: "0",
  title: "bla bla",
  tasks: [
    {
      id: "0",
      title: "first Test Task",
      startDate: 1,
      endDate: 10,
      percentage: 30,
    },
    {
      id: "1",
      title: "second Test Task",
      startDate: 1,
      endDate: 10,
      percentage: 30,
    },
    {
      id: "2",
      title: "third Test Task",
      startDate: 1,
      endDate: 10,
      percentage: 30,
    },
  ],
}
describe("<ProjectBars/> Render Bars ", () => {
  it("should Render Bars with the right Count", () => {
    setup(<ProjectBars project={projectTestData} />)
    const bars = screen.getAllByTestId("bar")
    expect(bars.length).toBe(projectTestData.tasks.length + 1)
  })
})
