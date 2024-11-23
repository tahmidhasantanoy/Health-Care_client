import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const generalUserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query({
      query: () => ({
        url: "/user/me", //
        method: "GET",
      }),
      providesTags: [tagTypes.User],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserDataQuery } = generalUserApi;
