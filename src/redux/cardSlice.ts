import { createSlice } from "@reduxjs/toolkit"

const cards = createSlice({
  name: "cards",
  initialState: {
    image: "",
    fullName: "",
    currentPosition: "",
    activationDate: {
      startDate: "",
      endDate: "",
    },
    accessLevel: "",
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload
    },
    setForumData: (state, action) => {
      console.log(action.payload)

      state.fullName = action.payload.fullName
      state.currentPosition = action.payload.currentPosition
      state.accessLevel = action.payload.accessLevel
    },
  },
})
export const cardsReducer = cards.reducer
export const { setImage, setForumData } = cards.actions
