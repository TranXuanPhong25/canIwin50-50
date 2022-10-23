import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  correct: 0,
  played: 0,
  total: 10,
  status: "start",
  
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.correct++
      state.played++
    },
    notIncrement(state) {
      state.played++
    },
    changeStatus(state, action) {
      state.status = action.payload

    },
    reset: (state) => {
      state.correct= 0
      state.played= 0
      state.total= 10
      state.status= "game"
    }

  }
})

export const { increment, notIncrement, changeStatus, reset } = counterSlice.actions

export default counterSlice.reducer