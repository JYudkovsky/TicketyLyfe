import api from "../../store/api";

const eventsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/events/user",
      providesTags: ["Events"],
    }),

    addEvent: builder.mutation({
      query: (eventData) => ({
        url: "/events/tickets",
        method: "POST",
        body: eventData,
      }),
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${eventData.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddEventMutation,
  useDeleteEventMutation,
} = eventsApi;
