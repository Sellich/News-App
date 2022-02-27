import { createSlice } from "@reduxjs/toolkit"

const welcomeState = {
   pointer: ['NEWS', 'NASA', 'SPACEX']
}

const welcomeSlice = createSlice({
   name: "welcome",
   initialState: welcomeState,
   reducers: {

   }
})

export const { } = welcomeSlice.actions

export default welcomeSlice.reducer