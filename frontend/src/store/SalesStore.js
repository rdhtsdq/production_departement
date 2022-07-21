import { createSlice } from "@reduxjs/toolkit";
import RandomString from "./RandomString";
const SalesStore = createSlice({
  name:"sales",
  initialState:{value:{
    kode:RandomString(),
    tgl:null,
    cust_id:null,
    disc:null,
    totol_bayar:null
  }},
  reducers:{
    create : (state,action) => {
      state.value = action.payload
    },
    single : (state,action) => {
      state.value = action.payload
    }
  }
})

export const {create,single} = SalesStore.actions

export default SalesStore.reducer