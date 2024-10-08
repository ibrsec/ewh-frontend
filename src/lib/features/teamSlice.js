import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    teamMembers: [],
    loading: false,
    error: false,
}



const teamSlice = createSlice({
    name:'team',
    initialState,
    reducers:{
        fetchTeamStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        fetchTeamFail:(state)=>{
            state.loading = false;
            state.error = true;
        },
        fetchTeamSuccess:(state,{payload})=>{
            state.loading = false;
            state.teamMembers = payload; 
        }, 
        fetchTeamSuccessWithOutPayload:(state)=>{
            state.loading = false;  
        }, 
        fetchTeamLogout:(state)=>{
            state.teamMembers = []; 

        },
    }
})


export const {fetchTeamStart, fetchTeamFail, fetchTeamSuccess, fetchTeamSuccessWithOutPayload, fetchTeamLogout,} = teamSlice.actions;
export default teamSlice.reducer;