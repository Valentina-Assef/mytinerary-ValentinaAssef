import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Muestra el detalle de una ciudad
export const get_detail = createAsyncThunk("get_detail", async(obj) => {
  try {
    const response = await axios.get(`http://localhost:7000/api/cities/${obj._id}`)
    return {
      cityDetail: response.data.oneCity
    }
  } catch (error) {
    console.log(error)
  }
})

//Muestra los itinerarios
export const get_itineraries = createAsyncThunk("get_itineraries", async(obj) => {
  try {
    const response = await axios.get(`http://localhost:7000/api/itineraries/city/${obj.cityDetail._id}`)
    return {
      itineraries: response.data.itineraries
    }
  } catch (error) {
    console.log(error)
  }
})