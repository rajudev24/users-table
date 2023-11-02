import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRegSignData } from "../../components/UI/Signup";

export type IResData = {
  id: string;
  token: string;
};
export type ILogResData = {
  token: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IResData, IRegSignData>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation<ILogResData, IRegSignData>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: (page) => `/users?page=${page}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUsersQuery,
} = userApi;
