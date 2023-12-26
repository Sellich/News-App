import { createSlice } from "@reduxjs/toolkit";
import { nasaAPI } from "../API/NasaAPI";

const nasaState = {
  apod: {},
  isLoading: true
};

const nasaSlice = createSlice({
  name: 'nasa',
  initialState: nasaState,
  reducers: {
    setAPOD(state, action) {
      state.apod = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    }
  }
});

export const { setAPOD, setIsLoading } = nasaSlice.actions;

export const getAPOD = () => async (dispatch) => {
  let response = await nasaAPI.getAPOD();

  dispatch(setIsLoading(true));
  dispatch(setAPOD(response.data));
  dispatch(setIsLoading(false));
};

export default nasaSlice.reducer;
