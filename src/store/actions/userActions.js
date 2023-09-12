import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user_login = createAsyncThunk("user_login", async (obj) => {
  try {
    const {data} = await axios.post("http://localhost:7000/api/auth/signin", obj.data)
    localStorage.setItem("token", data.response.token)
    localStorage.setItem("user", JSON.stringify(data.response.user))
    return {
      user: data.response.user,
      token: data.response.token
    }
  } catch (error) {
    console.log(error)
    return {
      user: null
    }
  }
})

export const user_logout = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    await axios.post("http://localhost:7000/api/auth/signout")
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return null
  } catch (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = '/signin';
    } else {
      console.error(error);
      return rejectWithValue(error.message)
    }
  }
})

export const user_token = createAction("user_token", (user) => {
  return {
    payload: {
      user
    }
  }
})