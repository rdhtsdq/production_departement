import { createSlice } from "@reduxjs/toolkit";

const initialValue = {value:{nama:'',kode:'',telp:''}}

const Cust_id = createSlice({
  name:"cust_id",
  initialState:initialValue,
  reducers:{
    customer:(state,action) =>{
      state.value.nama = action.payload.nama
      state.value.kode = action.payload.kode
      state.value.telp = action.payload.telp
    },
    reset_cust:(state) => {
      state.value = initialValue
    }
  }
})
export const {customer,reset_cust} = Cust_id.actions
export default Cust_id.reducer