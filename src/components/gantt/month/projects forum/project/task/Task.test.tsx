import { setup } from "@utils"
import Task from "./Task"
import { task } from "@types"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
const taskData: task = {
  id: "1",
  startDate: 1,
  endDate: 10,
  percentage: 30,
  title: "Test Task Title",
}

describe("<Task/> Render Elements", () => {
  beforeEach(() => setup(<Task task={taskData} days={30} monthName="January" />))
  it("should Render task Title", () => {
    const title = screen.getByTestId("task-title")
    expect(title).toHaveTextContent(taskData.title)
  })
  it("should Render task start Date", () => {
    const startDate = screen.getByTestId("task-start-date")
    expect(startDate.textContent).toContain(`${taskData.startDate}`)
  })
  it("should Render task End Date", () => {
    const endDate = screen.getByTestId("task-end-date")
    expect(endDate.textContent).toContain(`${taskData.endDate}`)
  })
  it("should Render task Percentage", () => {
    const percentage = screen.getByTestId("task-percentage")
    expect(percentage.textContent).toContain(`${taskData.percentage}`)
  })
  it("should Render Delete & Edit Buttons", () => {
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toEqual(2)
  })
})

describe("<Task/> on Edit Click", () => {
  it("should Render The Edit Forum", () => {
    setup(<Task task={taskData} days={30} monthName="January" />)
    const editButton = screen.getByTestId("task-edit-button")
    userEvent.click(editButton)
    const forum = screen.getByTestId("task-forum")
    expect(forum).toBeInTheDocument()
  })
})

// describe("<Task/> on Delete Click", () => {
//   beforeEach(() => {
//     setup(<Task task={taskData} days={30} />)
//   })
//   it("should Render the Check Modal", () => {
//     // const deleteButton = screen.getByTestId("task-delete-button")
//     // userEvent.click(deleteButton)
//     // const deleteModal = screen.getByTestId("task-delete-modal")
//     // expect(deleteModal).toBeInTheDocument()
//   })
//   it("should Hide Check modal if Press 'ESC'", () => {})
//   it("should Hide Check modal if Click Cancel", () => {})
//   it("should Delete task & Hide Check modal if Press 'ENTER'", () => {})
//   it("should Delete task & Hide Check modal if Clock YES", () => {})
// })
