import { createReducer } from "@reduxjs/toolkit";

import { get_itineraries, get_itineraries_by_city, get_itinerary } from "../actions/itineraryAction";

const initialState = {
    itineraries: []
}

const itineraryReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_itineraries.fulfilled, (state, action) => {

            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
        .addCase(get_itineraries_by_city.fulfilled, (state, action) => {

            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
        .addCase(get_itinerary.fulfilled, (state, action) => {
                
                return {
                    ...state,
                    itinerary: action.payload.itinerary
                }
            }
        )
)

export default itineraryReducer;