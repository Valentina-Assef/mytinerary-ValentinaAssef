import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const user_login = createAsyncThunk("user_login", async (obj) => {
  try {
    const {data} = await axios.post("http://localhost:7000/api/auth/signin", obj.data)
    localStorage.setItem("token", data.response.token)
    localStorage.setItem("user", JSON.stringify(data.response.user))
    console.log(data);

    Swal.fire({
      title: 'Welcome',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

    return {
      user: data.response.user,
      token: data.response.token
    }
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'Error!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return {
      user: null
    }
  }
})

export const user_logout = createAsyncThunk("user_logout", async (_, { rejectWithValue }) => {
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

export const google_login = createAsyncThunk("google_login", async (obj) => {
  try {
    const {data} = await axios.post("http://localhost:7000/api/auth/google", obj.data)
    localStorage.setItem("token", data.response.token)
    localStorage.setItem("user", JSON.stringify(data.response.user))
    console.log(data);

    Swal.fire({
      title: 'Welcome',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

    return {
      user: data.response.user,
      token: data.response.token
    }
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'Error!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return {
      user: null
    }
  }
})