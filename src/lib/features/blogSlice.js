import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    blogs: [],
    blog:{},
    loading: false,
    error: false,
}



const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        fetchBlogStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        fetchBlogFail:(state)=>{
            state.loading = false;
            state.error = true;
        },
        fetchBlogSuccess:(state,{payload})=>{
            state.loading = false;
            state.blogs = payload; 
        }, 
        fetchOneBlogSuccess:(state,{payload})=>{
            state.loading = false;
            state.blog = payload; 
        }, 
        fetchBlogSuccessWithOutPayload:(state)=>{
            state.loading = false;  
        }, 
        fetchBlogLogout:(state)=>{
            state.blogs = []; 
            state.blog = {}; 

        },
    }
})


export const {fetchBlogStart, fetchBlogFail, fetchBlogSuccess, fetchOneBlogSuccess, fetchBlogSuccessWithOutPayload, fetchBlogLogout,} = blogSlice.actions;
export default blogSlice.reducer;