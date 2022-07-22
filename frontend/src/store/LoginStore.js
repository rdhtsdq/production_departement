import { createSlice } from "@reduxjs/toolkit";

const LoginStore = createSlice({
  name:"login",
  initialState:{value:{}},
  reducers:{
    login: (state,action) => {
      state.value = action.payload
      window.localStorage.setItem('token',state.value.token)
      // if (!window.localStorage.getItem('token')) {
      //   window.localStorage.setItem('token',JSON.stringify(state.value.token))
      // }else if (window.localStorage.getItem('token') && state.value.token) {
      //   window.localStorage.setItem('token',state.value.token)
      // }

      // if(!state.value){
      //   state.value = window.localStorage.getItem('token')
      // }
    },
    logout : (state) => {
      state.value = {}
      window.localStorage.removeItem('token')
    }
  }
})

export const {login,logout} = LoginStore.actions

export default LoginStore.reducer