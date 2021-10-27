import { screen, fireEvent, act } from "@testing-library/react"
import { setup } from "@utils"
import Project from "./Project"
import { project } from "@types"
import _ from "lodash"
const projectData: project = {
  id: "0",
  color: "#FF0000",
  title: "The Test OF First Project",
  tasks: [
    {
      id: "0",
      title: "first Task",
      startDate: 1,
      endDate: 5,
      percentage: 55,
    },
    {
      id: "1",
      title: "second Task",
      startDate: 6,
      endDate: 12,
      percentage: 55,
    },
    {
      id: "2",
      title: "third Task",
      startDate: 14,
      endDate: 19,
      percentage: 55,
    },
  ],
}

describe("<Project/> Render Elements According To Props", () => {
  beforeEach(() => setup(<Project project={projectData} days={30} monthName="January" />))
  it("should Render Project Title", () => {
    const title = screen.getByTestId("project-title")
    expect(title.textContent).toBe(projectData.title)
  })
  it("should Render Project Start Date", () => {
    const startDate = screen.getByTestId("project-start-date")
    let tasksStartDates = []
    for (const task of projectData.tasks) {
      tasksStartDates.push(task.startDate)
    }
    const minStartDate = _.min(tasksStartDates)
    expect(startDate.textContent).toContain(`${minStartDate}`)
  })
  it("should Render Project  End Date", () => {
    const endDate = screen.getByTestId("project-end-date")
    let tasksEndDates = []
    for (const task of projectData.tasks) {
      tasksEndDates.push(task.endDate)
    }
    const maxEndDate = _.max(tasksEndDates)
    expect(endDate.textContent).toContain(`${maxEndDate}`)
  })
  it("should Render Project Total Percentage", () => {
    const percentage = screen.getByTestId("project-percentage")
    let tasksPercentages = []
    for (const task of projectData.tasks) {
      tasksPercentages.push(task.percentage)
    }
    const meanPercentage = _.mean(tasksPercentages)
    expect(percentage.textContent).toContain(`${meanPercentage}`)
  })
  it("should Render Project Color", () => {
    const color = screen.getByTestId("project-color")
    expect(color).toHaveStyle(`background-color:${projectData.color}`)
  })
  it("should Render Project 'Edit' Button", () => {
    const editButton = screen.getByTestId("project-edit-button")
    expect(editButton).toBeInTheDocument()
  })
  it("should Render Project 'Delete' Button", () => {
    const deleteButton = screen.getByTestId("project-delete-button")
    expect(deleteButton).toBeInTheDocument()
  })
  it("should Render Project 'Add New Task' Button", () => {
    const addNewTaskButton = screen.getByTestId("add-new-task-button")
    expect(addNewTaskButton).toBeInTheDocument()
  })
  it("should Render Tasks with right count of source data", () => {
    const task = screen.getAllByTestId("task-holder")
    expect(task.length).toBe(projectData.tasks.length)
  })
})
describe("<Project/> on Add New Task", () => {
  it("should Show Task Form", async () => {
    setup(<Project project={projectData} days={30} monthName="January" />)
    const addNewTaskButton = screen.getByTestId("add-new-task-button")
    await act(async () => {
      fireEvent.click(addNewTaskButton)
    })
    const taskForm = await screen.getByTestId("task-forum")
    expect(taskForm).toBeInTheDocument()
  })
})
// describe("<Project/> on Edit", () => {
//   it("should Show Edit Project Form", async () => {
//     setup(<Project project={projectData} days={30} monthName="January" />)
//     const editButton = screen.getByTestId("project-edit-button")
//     await act(async () => {
//       fireEvent.click(editButton)
//     })
//     const projectForm = await screen.getByTestId("project-edit-form")
//     expect(projectForm).toBeInTheDocument()
//   })
// })

// // describe("<Project/> on Delete", () => {
// //    it("should Show Delete Project Modal", async () => {
// //      const deleteButton = screen.getByTestId("project-delete-button")
// //      await act(async () => {
// //        fireEvent.click(deleteButton)
// //      })
// //    })
// // })
