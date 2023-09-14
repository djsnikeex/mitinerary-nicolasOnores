import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './reducers/cityReducer'
import itineraryReducer from './reducers/itineraryReducer'
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer,
        userReducer: userReducer

    }
});

export default store;
