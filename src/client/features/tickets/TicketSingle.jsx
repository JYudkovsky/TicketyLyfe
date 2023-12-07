import React from "react";
import { useGetTicketQuery } from "./TicketSlice";
import { useParams } from "react-router-dom";

function getTicket() {
  const { id } = useParams();
  const { data: ticket, error, isLoading } = useGetTicketQuery(id);
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  // leave open for obtaining ticket

  return (
    <>
      <div>
        <h2>{ticket.eventName}</h2>
        <p>{ticket.location}</p>
        <p>{ticket.dateTime}</p>
        <p>{ticket.description}</p>
        <p>{ticket.seatSection}</p>
        <p>Buy Now Price: %{ticket.price}</p>
      </div>
    </>
  );
}
