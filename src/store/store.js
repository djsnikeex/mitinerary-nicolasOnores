import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './reducers/cityReducer'
import itineraryReducer from './reducers/itineraryReducer'

const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer

    }
});

export default store;
