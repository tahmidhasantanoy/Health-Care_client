/* Server path 4 : specialtiesApi */
/* Try to inject specialtiesApi as endpoints(baseApi/something) with baseApi */
/* It's a example(model) for creating a new api endpoint */
/* ** Search : write code & search(RTK query) in redux toolkit ** */
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        // (  = for auto return
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data: data, //data
      }),
      invalidatesTags: [tagTypes.Specialists], // don't cache data
    }),
    getAllSpecialist: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      // providesTags: ["specialists"],
      providesTags: [tagTypes.Specialists], // cache data || from baseApi
    }),
    deleteSpecialist: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Specialists], // don't cache data
    }),
  }),
  // overrideExisting: false,
});

export const {
  useCreateSpecialityMutation,
  useGetAllSpecialistQuery,
  useDeleteSpecialistMutation,
} = specialistApi;
