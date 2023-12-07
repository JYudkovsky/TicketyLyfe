import api from "../../store/api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/Users",
      providesTages: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `/Users/${id}`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
