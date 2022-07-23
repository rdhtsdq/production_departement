import { createSlice } from "@reduxjs/toolkit";

const LoginStore = createSlice({
  name:"login",
  initialState:{value:''},
  reducers:{
    login: (state,action) => {
      state.value = action.payload
      window.localStorage.setItem('token',state.value)
    },
    logout : (state) => {
      state.value = {}
      window.localStorage.removeItem('token')
    },
  }
})

export const {login,logout} = LoginStore.actions


export default LoginStore.reducer