import { createSlice } from "@reduxjs/toolkit";
import { postsData } from "../DummyData";
import { postType } from "../postType";

export const postsSlice=createSlice({
    name:"posts",
    initialState:{
        value:postsData as postType[],
    },
    reducers:{
        addPost:(state,action)=>{
            // state.value.push(action.payload);
            state.value=[...state.value,action.payload];
        },
        deletePost:(state,action)=>{
            state.value=state.value.filter((post)=>post.id!==action.payload.id);
        }
    }
})

export const {addPost,deletePost}=postsSlice.actions;
export default postsSlice.reducer;