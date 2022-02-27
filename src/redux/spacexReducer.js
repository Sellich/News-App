import { createSlice } from "@reduxjs/toolkit"
import { spacexAPI } from "../API/SpacexAPI"

const spacexState = {
   rockets: [],
   isLoading: true,
}

const spacexSlice = createSlice({
   name: "spacex",
   initialState: spacexState,
   reducers: {
      setRockets(state, action) {
         state.rockets = action.payload
      },
      setIsLoading(state, action) {
         state.isLoading = action.payload
      }
   }
})

export const getRockets = () => async (dispatch) => {

   let response = await spacexAPI.getRockets()

   dispatch(setIsLoading(true))
   dispatch(setRockets(response.data))
   dispatch(setIsLoading(false))
}

export const { setRockets, setIsLoading } = spacexSlice.actions

export default spacexSlice.reducer