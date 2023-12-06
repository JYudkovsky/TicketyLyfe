import api from "../../store/api";

const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => "/Tickets",
      providesTags: ["Tickets"],
    }),
    getTicket: builder.query({
      query: (id) => `/Tickets/${id}`,
      providesTags: ["Tickets"],
    }),
    addTicket: builder.mutation({
      query: (ticket) => ({
        url: "/Tickets",
        method: "POST",
        body: ticket,
      }),
    }),
    editTicket: builder.mutation({
      query: (ticket) => ({
        url: `/Tickets/${ticket.id}`,
        method: "PUT",
        body: ticket,
      }),
      invalidatesTags: ["Tickets"],
    }),
    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/Tickets/${id}`,
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
