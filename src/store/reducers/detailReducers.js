import { createReducer } from "@reduxjs/toolkit";
import { get_detail, get_itineraries } from "../actions/detailActions";

const initialState = {
    cityDetail: {},
    itineraries: []
}

const detailReducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(get_detail.fulfilled, (state, action) => {
      return {
        ...state,
        cityDetail: action.payload.cityDetail
      }
    })
    .addCase(get_itineraries.fulfilled, (state, action) => {
      return {
        ...state,
        itineraries: action.payload.itineraries
      }
    })
)

export default detailReducer