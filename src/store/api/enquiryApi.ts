import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enquiryApi = createApi({
  reducerPath: 'enquiryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Enquiry'],
  endpoints: (builder) => ({
    getEnquiries: builder.query({
      query: () => '/enquiries',
      providesTags: ['Enquiry'],
    }),
    createEnquiry: builder.mutation({
      query: (body) => ({
        url: '/enquiries',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Enquiry'],
    }),
    updateEnquiryStatus: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/enquiries/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Enquiry'],
    }),
  }),
});

export const { useGetEnquiriesQuery, useCreateEnquiryMutation, useUpdateEnquiryStatusMutation } = enquiryApi;
