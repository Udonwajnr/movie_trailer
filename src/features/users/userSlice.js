import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    email:'',
    picture:'',
    wishlist:[],
    favorite:[],
    authentication:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLogin:(state,action)=>{
            // firebase authentication
            state.name = action.payload.name
            state.email = action.payload.email
            state.picture = action.payload.picture
            state.authentication = true
        },

        setUserLogout:(state,action)=>{
            state.name = null
            state.email = null
            state.picture = null
            state.authentication = false
            // wishlist=[]
            // favorite=[]
        }

    }
})
export const {setUserLogin,setUserLogout} = userSlice.actions

export default userSlice.reducer