import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {User} from 'types';

interface AuthState {
  user: User | null;
  token: string | null;
  isFromSignup?: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isFromSignup: false,
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
    setIsSignup: (state, {payload}: PayloadAction<boolean>) => {
      state.isFromSignup = payload;
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

export const {setUser, setToken, setIsSignup, setCredentials, logout} =
  authSlice.actions;

export default authSlice.reducer;
