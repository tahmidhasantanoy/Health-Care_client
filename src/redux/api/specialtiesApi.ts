/* Try to inject specialtiesApi endpoints(baseApi/something) with baseApi */
/* It's a example for creating a new api endpoint */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const createSpecialistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        // (  = for auto return
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data: data, //data
      }),
      invalidatesTags: [tagTypes.Specialists],
    }),
    getAllSpecialist: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      // providesTags: ["specialists"],
      providesTags: [tagTypes.Specialists], // from baseApi
    }),
  }),
  // overrideExisting: false,
});

export const { useCreateSpecialityMutation, useGetAllSpecialistQuery } =
  createSpecialistApi;
