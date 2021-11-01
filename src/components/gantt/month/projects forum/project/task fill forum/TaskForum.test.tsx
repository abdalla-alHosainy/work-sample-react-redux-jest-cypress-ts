import { setup } from "@utils"
import TaskForum from "./TaskForum"
import { task } from "@types"
import { screen, waitFor, act, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
const taskData: task = {
  id: "1",
  startDate: 1,
  endDate: 10,
  percentage: 30,
  title: "Test Task Title",
}
describe("<TaskForum/> Render Elements with Right Values", () => {
  beforeEach(() => {
    const changeState = jest.fn()
    setup(
      <TaskForum
        task={taskData}
        days={30}
        editModeState={(e: boolean) => changeState(e)}
        editOrNew="edit"
        idsArray={[0, "0", "1"]}
      />
    )
  })
  it("should Render Title Input with Right Values", () => {
    const titleInput = screen.getByTestId("task-form-title").querySelector("input")
    expect(titleInput?.value).toBe(taskData.title)
  })
  it("should Render Star Date With Right Values", () => {
    const startDate = screen.getByTestId("task-form-start-date").querySelector("select")
    expect(startDate?.value).toBe(`${taskData.startDate}`)
  })
  it("should Render End Date With Right Values", () => {
    const endDate = screen.getByTestId("task-form-end-date").querySelector("select")
    expect(endDate?.value).toBe(`${taskData.endDate}`)
  })
  it("should Render Percentage With Right Values", () => {
    const percentage = screen.getByTestId("task-form-percentage").querySelector("input")
    expect(percentage?.value).toBe(`${taskData.percentage}`)
  })
})
