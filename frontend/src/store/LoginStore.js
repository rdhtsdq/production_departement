import { createSlice } from "@reduxjs/toolkit";

const LoginStore = createSlice({
  name:"login",
  initialState:{value:{}},
  reducers:{
    login: (state,action) => {
      state.value = action.payload
    }
  }
})

export const {login} = LoginStore.actions

export default LoginStore.reducer