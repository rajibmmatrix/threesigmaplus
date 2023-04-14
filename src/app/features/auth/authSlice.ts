import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {User} from 'types';

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<User>) => {
      state.user = payload;
    },
    setToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    setCredentials: (state, {payload}: PayloadAction<AuthState>) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setUser, setToken, setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
