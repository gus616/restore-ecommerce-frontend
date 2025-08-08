import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../../models/User';
const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface LoginBody {
  identifier: string;
  password: string;
}

interface RegisterBody {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
}

interface LoginResponse {
  succeeded: boolean;
  errors: string[];
  token: string;
  email: string;
  phoneNumber: string;
  userName: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (build) => ({
    signIn: build.mutation<User, RegisterBody>({
      query: (body) => ({
        url: '/Account/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: '/Account/login',
        method: 'POST',
        body,
        credentials: 'include', // Include cookies in the request
      }),
    }),
  }),
});
export const { useSignInMutation, useLoginMutation } = authApi;
