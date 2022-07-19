import { createSlice } from "@reduxjs/toolkit";

const LoginStore = createSlice({
  name:"login",
  initialState:{value:{}},
  reducers:{
    login: (state,action) => {
      state.value = action.payload
    },
    logout : (state) => {
      state.value = {}
    }
  }
})

export const {login,logout} = LoginStore.actions

export default LoginStore.reducer