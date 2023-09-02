import { createReducer } from "@reduxjs/toolkit";
import { get_cities, filter_search } from "../actions/cityActions";

const initialState = {
  cities: []
}

const cityReducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(get_cities.fulfilled, (state, action) => {
      return {
        ...state,
        cities: action.payload.cities
      }
    })
    .addCase(filter_search.fulfilled, (state, action) => {
      return {
        ...state,
        cities: action.payload.cities
      }
    })
)

export default cityReducer