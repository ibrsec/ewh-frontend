import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    trainings: [],
    loading: false,
    error: false,
}



const trainingSlice = createSlice({
    name:'training',
    initialState,
    reducers:{
        fetchTrainingStart:(state)=>{
            state.loading = true;
            state.error = false;
        },
        fetchTrainingFail:(state)=>{
            state.loading = false;
            state.error = true;
        },
        fetchTrainingSuccess:(state,{payload})=>{
            state.loading = false;
            state.trainings = payload; 
        }, 
        fetchTrainingSuccessWithOutPayload:(state)=>{
            state.loading = false;  
        }, 
        fetchTrainingLogout:(state)=>{
            state.trainings = []; 

        },
    }
})


export const {fetchTrainingStart, fetchTrainingFail, fetchTrainingSuccess, fetchTrainingSuccessWithOutPayload, fetchTrainingLogout,} = trainingSlice.actions;
export default trainingSlice.reducer;