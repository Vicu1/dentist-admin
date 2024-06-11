import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

interface loginPayload {
  token: string,
}

interface decodedTokenPayload {
  email: string,
}

export interface IUser {
  token: string,
  email: string
}

export type AuthState = {
    user: IUser
}

const initialState: AuthState = {
  user: {
    email: '',
    token: '',
  },
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginPayload>) => {
      const decodedToken: decodedTokenPayload = jwtDecode(action.payload.token);
      state.user = {
        email: decodedToken.email,
        token: action.payload.token,
      };
      setCookie('user', JSON.stringify(state.user));
    },
    setUserInfo: (state, action: PayloadAction<AuthState>) => {
      state.user = { ...action.payload.user };
      setCookie('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = { ...initialState.user };
      deleteCookie('user');
    },
    updateUserInfo: (state, {
      payload: {
        user: {
          token = null,
        },
      },
    }) => {

      if (token !== null) {
        state.user.token = token;
      }

      setCookie('user', JSON.stringify(state.user));
    },
  },
});

export const {
  login,
  setUserInfo,
  logout,
  updateUserInfo,
} = user.actions;
export default user.reducer;
