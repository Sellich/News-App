import { configureStore } from "@reduxjs/toolkit";
import nasaReducer from "./nasaReducer";
import newsReducer from "./newsReducer";
import spacexReducer from "./spacexReducer";
import welcomeReducer from "./welcomeReducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    nasa: nasaReducer,
    spacex: spacexReducer,
    welcome: welcomeReducer,
  },
});

export default store;
