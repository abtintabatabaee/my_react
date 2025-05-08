import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const AuthSlice = createSlice({
name:"auth",
initialState:{
    username:localStorage.getItem("name"),
    token:localStorage.getItem("token"),
    status:"",
    loginStatus:"",
    loginError:"",
    loginMessage:""

},
reducers:{
    logout:(state,action)=>{

        if(localStorage.getItem("token")){
            toast.warning("you logged out",{
                position:"bottom-center"
               })
           }
          state.token=""
          state.username=""
          localStorage.removeItem("token")  
          localStorage.removeItem("name")
          state.loginStatus=""
          state.loginError=""
         
    }

},

extraReducers(builder){
builder.addCase(userLogin.fulfilled,(state,action)=>{

    return{
        ...state,
        loginStatus:"success",
        token:action.payload.token,
        ...localStorage.setItem("token",action.payload.token),
        username:action.payload.username,
        ...localStorage.setItem("name",action.payload.username),

        ...toast.success(action.payload.message,{
            position:"bottom-center"
           })
    }
        





})
builder.addCase(userLogin.rejected,(state,action)=>{
return {
    ...state,
    loginStatus:"rejected",
    loginError:action.payload

}


})
  

}



})
export const userLogin = createAsyncThunk(
"/auth/userLogin",
async (data,{rejectWithValue})=>{

    try {
        const response = await axios.post("http://localhost:5000/api/users/login",data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
}

)

export default AuthSlice.reducer

export const {logout}=AuthSlice.actions