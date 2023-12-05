import api from "../../store/api";

const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/tickets/ticket",
      providesTags: ["Events"],
    }),

    addTicket: builder.mutation({
      query: (eventData) => ({
        url: "/tickets/ticket",
        method: "POST",
        body: eventData,
      }),
    }),
    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/tickets/${ticketData.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useAddTicketMutation,
  useDeleteTicketMutation,
} = ticketsApi;
