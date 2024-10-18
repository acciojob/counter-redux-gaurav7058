import {createSlice} from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increament:(state,action)=>{
            state.count+=action.payload
        },

        decrement:(state,action)=>{
            state.count-=action.payload
        }

    }

})

export default Slice.reducer
export const {increament,decrement}=Slice.actions