import { createSlice } from "@reduxjs/toolkit"
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
            {
              id: "3",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
            {
              id: "4",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
            {
              id: "5",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
            {
              id: "6",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
            {
              id: "7",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
          ],
        },
        {
          id: "1",
          title: "second project",
          color: "#FF0000",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
            },
          ],
        },
        {
          id: "2",
          title: "third project",
          color: "#FF0000",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
            },
          ],
        },
        {
          id: "3",
          title: "fourth project",
          color: "#FF0000",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 3,
              percentage: 30,
            },
            {
              id: "1",
              title: "second task",
              startDate: 3,
              endDate: 7,
              percentage: 30,
            },
            {
              id: "2",
              title: "third task",
              startDate: 8,
              endDate: 15,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
            },
            {
              id: "1",
              title: "second task",
              startDate: 1,
              endDate: 20,
              percentage: 40,
            },
          ],
        },
        {
          id: "1",
          title: "Second project",
          color: "#FF0000",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
            },
            {
              id: "1",
              title: "second task",
              startDate: 1,
              endDate: 20,
              percentage: 40,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
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
          color: "#0088FF",
          tasks: [
            {
              id: "0",
              title: "first task",
              startDate: 1,
              endDate: 10,
              percentage: 30,
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    //  setImage: (state, action) => {
    //    state.image = action.payload
    //  },
    //  setForumData: (state, action) => {
    //    console.log(action.payload)
    //    state.fullName = action.payload.fullName
    //    state.currentPosition = action.payload.currentPosition
    //    state.accessLevel = action.payload.accessLevel
    //  },
  },
})
export const ganttReducer = gantt.reducer
// export const { setImage, setForumData } = gantt.actions
