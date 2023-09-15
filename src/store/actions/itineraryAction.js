import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import {apiUrl} from '../../api'


export const get_itineraries = createAsyncThunk('get_itineraries', async (e) => {
    try {
        const res = await Axios.get( `${apiUrl}/itineraries`)

        // console.log(response.data.events)
        return {
            itineraries: res.data.itineraries

        }
    } catch (error) {
        console.log(error)
        return {
            itineraries: []
        }
    }
})

export const get_itineraries_by_city = createAsyncThunk('get_itineraries_by_city', async (e) => {
    /* try {
        const res = await Axios.get( `http://localhost:4000/api/itineraries/city/${e._id}`)

        // console.log(response.data.events)
        return {
            itineraries: res.data.itineraries
        }
    } catch (error) {
        console.log(error)
    } */
})

export const get_itinerary = createAsyncThunk('get_itinerary', async (e) => {
    try {
        
        const res = await Axios.get( `${apiUrl}/itineraries/${e._id}`)
        console.log(res.data.itinerary)
        // console.log(response.data.events)
        return {
            itinerary: res.data.itinerary
        }
    } catch (error) {
        console.log(error)
        return {
            itinerary: []
        }
    }
})