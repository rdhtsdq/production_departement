import { createSlice } from "@reduxjs/toolkit";

const initialValue = []

const CustomerStore = createSlice({
  name:"customers",
  initialState:{value:initialValue},
  reducers:{
    getAllCust: (state,action) => {
      state.value = action.payload
    },
    resetCust: (state) => {
      state.value = initialValue
    }
  }
})


export const {getAllCust,resetCust} = CustomerStore.actions
export default CustomerStore.reducer