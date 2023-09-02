import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Muestra todas las ciudades
export const get_cities = createAsyncThunk("get_cities", async() => {
  try {
    const response = await axios.get("http://localhost:7000/api/cities")
    return {
      cities: response.data.cities
    }
  } catch (error) {
    console.log(error)
  }
})

//Search
export const filter_search = createAsyncThunk("filter_search", async(obj) => {
  try {
    const response = await axios.get(`http://localhost:7000/api/cities?name=${obj.name}`)
    return {
      cities: response.data.cities
    }
  } catch (error) {
    console.log(error)
    return {
      cities: []
    }
  }
})