import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    movie:[],
}

export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
          return {...state,
            movie:action.payload
        }
        }
    }
})

export const {setMovies} = movieSlice.actions

export default movieSlice.reducer