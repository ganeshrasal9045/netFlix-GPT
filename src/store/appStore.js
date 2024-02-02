import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import moviesReducer from "../store/moviesSlice";
import gptReducer from "../store/gptSlice";
import configReducer from "../store/configSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
})

export default appStore;