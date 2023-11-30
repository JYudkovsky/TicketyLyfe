import api from "../../store/api";

const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/events",
      providesTags: ["Events"],
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
