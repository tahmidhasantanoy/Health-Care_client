/* Server path 4 : doctorsApi */
/* Creating endpoint only */
//DONE
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.Doctors],
    }),
  }),
});

export const { useCreateDoctorMutation } = doctorApi;

/* Life cycle :
call 1.useCreateDoctorMutation & get endpoint(createDoctor) from here
call 2.baseApi & get baseUrl
call 3.axiosBaseQuery & finsh the api call */
