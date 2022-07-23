import { createSlice } from "@reduxjs/toolkit";

const ProductStore = createSlice({
  name:"product",
  initialState:{value:{}},
  reducers:{
    addProduct: (state,action) => {
      state.value = action.payload
    },
    resetProduct : (state) => {
      state.value = {}
    }
  }
})

export const {addProduct,resetProduct} = ProductStore.actions
export default ProductStore.reducer