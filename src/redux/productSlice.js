import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({

    name:"products",
    initialState:{
            items:"",
            status:null

    },
    extraReducers:(builder)=>{

        builder.addCase(productFetch.fulfilled,(state,action)=>{

            state.items=action.payload;
            state.status="success"
        })
    }

})



export const productFetch = createAsyncThunk(
"products/productFetch",
async ()=> {

    try {
        const response = await axios.get("http://localhost:3000/api/products")
        return response.data
        
    } catch (error) {
        
    }
   

}

)
export default productSlice.reducer 