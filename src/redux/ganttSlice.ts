import { createSlice } from "@reduxjs/toolkit"
import theme from "@style"
import { v4 as uuid } from "uuid"
import _ from "lodash"
const colorTheme = theme.gantt.color
const gantt = createSlice({
  name: "gantt-chart",
  initialState: [
    {
      id: 0,
      name: "January",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          willDelete: false,
          color: "cyan",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "3",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "4",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "5",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "6",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "7",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
        {
          id: "1",
          title: "second project",
          color: "red",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
        {
          id: "2",
          title: "third project",
          color: "red",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
        {
          id: "3",
          title: "fourth project",
          color: "red",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "February",
      days: 28,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "March",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "April",
      days: 30,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "May",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "June",
      days: 30,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "July",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "August",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "September",
      days: 30,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "October",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "1",
              title: "second task",
              startDate: 1,
              endDate: 20,
              percentage: 40,
              willDelete: false,
            },
          ],
        },
        {
          id: "1",
          title: "Second project",
          color: "red",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
            {
              id: "1",
              title: "second task",
              startDate: 1,
              endDate: 20,
              percentage: 40,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "November",
      days: 30,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "December",
      days: 31,
      projects: [
        {
          id: "0",
          title: "first project",
          color: "cyan",
          willDelete: false,
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
              willDelete: false,
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    editTask: (state, action) => {
      const { ids, title, startDate, endDate, percentage } = action.payload
      const projects = state[ids[0]].projects
      const tasks = _.find(projects, { id: ids[1] }).tasks
      const task = _.find(tasks, { id: ids[2] })
      task.title = title
      task.startDate = parseInt(startDate)
      task.endDate = parseInt(endDate)
      task.percentage = percentage
    },
    addTask: (state, action) => {
      const { ids, title, startDate, endDate, percentage } = action.payload
      const projects = state[ids[0]].projects
      const tasks = _.find(projects, { id: ids[1] }).tasks
      tasks.push({
        id: ids[2],
        title,
        startDate: parseInt(startDate),
        endDate: parseInt(endDate),
        percentage,
        willDelete: false,
      })
    },
    willDeleteTask: (state, action) => {
      const { ids, willDeleteTask } = action.payload
      const task = _.find(_.find(state[ids[0]].projects, { id: ids[1] }).tasks, { id: ids[2] })
      task.willDelete = willDeleteTask
    },
    deleteTask: (state, action) => {
      const { ids } = action.payload
      const projects = state[ids[0]].projects
      const tasks = _.find(projects, { id: ids[1] }).tasks
      _.remove(tasks, { id: ids[2] })
    },
    addProject: (state, action) => {
      const {
        id,
        projectTitle,
        projectColor,
        taskTitle,
        taskStartDate,
        taskEndDate,
        taskPercentage,
      } = action.payload
      const projects = state[id].projects
      projects.push({
        id: uuid(),
        color: projectColor,
        title: projectTitle,
        willDelete: false,
        tasks: [
          {
            id: uuid(),
            title: taskTitle,
            startDate: taskStartDate,
            endDate: taskEndDate,
            percentage: taskPercentage,
            willDelete: false,
          },
        ],
      })
    },
    editProject: (state, action) => {
      const { ids, projectTitle, projectColor } = action.payload
      const projects = state[ids[0]].projects
      const project = _.find(projects, { id: ids[1] })
      project.color = projectColor
      project.title = projectTitle
    },
    willDeleteProject: (state, action) => {
      const { ids, willDeleteProject } = action.payload
      const project = _.find(state[ids[0]].projects, { id: ids[1] })
      project.willDelete = willDeleteProject
    },
    deleteProject: (state, action) => {
      const { ids } = action.payload
      _.remove(state[ids[0]].projects, { id: ids[1] })
    },
  },
})
export const ganttReducer = gantt.reducer
export const {
  editTask,
  addTask,
  deleteTask,
  addProject,
  editProject,
  willDeleteProject,
  willDeleteTask,
  deleteProject,
} = gantt.actions
