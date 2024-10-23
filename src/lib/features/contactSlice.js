import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    contactInfos: [],
    loading: false,
    error: false,
}



const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        fetchContactStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        fetchContactFail:(state)=>{
            state.loading = false;
            state.error = true;
        },
        fetchContactSuccess:(state,{payload})=>{
            state.loading = false;
            state.contactInfos = payload; 
        }, 
        fetchContactSuccessWithOutPayload:(state)=>{
            state.loading = false;  
        }, 
        fetchContactLogout:(state)=>{
            state.contactInfos = []; 

        },
    }
})


export const {fetchContactStart, fetchContactFail, fetchContactSuccess, fetchContactSuccessWithOutPayload, fetchContactLogout,} = contactSlice.actions;
export default contactSlice.reducer;