export const selectAPOD = (state) => {
  return state.nasa.apod;
}

export const selectIsLoadingNasa = (state) => {
  return state.nasa.isLoading;
}
