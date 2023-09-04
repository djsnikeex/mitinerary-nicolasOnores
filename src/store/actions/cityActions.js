import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import cities from "../../components/cities";


export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const res = await Axios.get('http://localhost:4000/api/cities')

        // console.log(response.data.events)
        return {
            cities: res.data.cities
        }
    } catch (error) {
        console.log(error)
        return {
            cities: []
        }
    }
})

export const filter_cities = createAsyncThunk('filter_cities', async (e) => {
    try {
        const res = await Axios.get( `http://localhost:4000/api/cities?city=${e.name}`)

        // console.log(response.data.events)
        return {
            cities: res.data.cities
        }
    } catch (error) {
        console.log(error)
        return {
            cities: []
        }


        
    }
})

export const get_city = createAsyncThunk('get_city', async (e) => {
    try {
        const res = await Axios.get( `http://localhost:4000/api/cities/${e.id}`)

        // console.log(response.data.events)
        return {
            cities: res.data.city
        }
    } catch (error) {
        console.log(error)
        return {
            cities: []
        }
    }
}

)

