import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./action"
const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store