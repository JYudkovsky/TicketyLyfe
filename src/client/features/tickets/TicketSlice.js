import api from "../../store/api";

const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/tickets",
      providesTags: ["Tickets"],
    }),
    getTicket: builder.query({
      query: (id) => `/tickets/${id}`,
      providesTags: ["Tickets"],
    }),
    addTicket: builder.mutation({
      query: (ticket) => ({
        url: "/tickets",
        method: "POST",
        body: ticket,
      }),
    }),
    editTicket: builder.mutation({
      query: (ticket) => ({
        url: `/tickets/${ticket.id}`,
        method: "PUT",
        body: ticket,
      }),
      invalidatesTags: ["Tickets"],
    }),
    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useAddTicketMutation,
  useDeleteTicketMutation,
  useEditTicketMutation,
  useGetTicketQuery
} = ticketsApi;
