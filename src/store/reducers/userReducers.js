import { createReducer } from "@reduxjs/toolkit";
import {user_img} from "../actions/userActions";

const initialState = {
  img: ""
}

const userReducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(user_img, (state, action) => {
      return {
          ...state,
          img: action.payload.img
      }
    })
)

export default userReducer