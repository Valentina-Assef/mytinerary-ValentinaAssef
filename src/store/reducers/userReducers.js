import { createReducer } from "@reduxjs/toolkit";
import { google_login, user_login, user_logout, user_token } from "../actions/userActions";

const initialState = {
  user: null,
  token: null
}

const userReducer = createReducer(initialState, (builder) => builder
    .addCase(user_login.fulfilled, (state, action) => {
      return {
          ...state,
          user: action.payload.user,
          token: action.payload.token
      }
    })
    .addCase(user_logout.fulfilled, (state) => {
      return {
          ...state,
          user: null,
          token: null
      }
    })
    .addCase(user_token, (state, action) => {
      return {
          ...state,
          user: action.payload.user,
      }
    })
    .addCase(google_login.fulfilled, (state, action) => {
      return {
          ...state,
          user: action.payload.user,
          token: action.payload.token
      }
    })

)

export default userReducer