import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerReducer from "../Componets/Common/headerSlice";


const store = configureStore({
    reducer: combineReducers({
        header: headerReducer
    })
});


export default store;