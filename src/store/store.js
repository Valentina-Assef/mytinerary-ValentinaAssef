import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducers"
import cityReducer from "./reducers/cityReducers"
import detailReducer from "./reducers/detailReducers"

export const store = configureStore({
  reducer: {
    userReducer,
    cityReducer,
    detailReducer
  }
})