import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteEventMutation } from "./EventSlice";
import AddTicketForm from "./AddTicketForm";

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("${id}");
  };

  const viewSellerProfile = () => {
    navigate("${id}");
  };

  const [deleteEvent] = useDeleteEventMutation();
  const handleDelete = () => {
    deleteEvent();
    navigate("/events");
  };

  return (
    <>
      {/* <form className="add-ticket-form">
        <AddTicketForm />
      </form> */}
      <div className="event-card">
        {event.tickets.map((ticket) => (
          <div key={ticket.id}>
            <h2>{ticket.eventName}</h2>
            <p>{ticket.location}</p>
            <p>{ticket.dateTime}</p>
            <p>{ticket.description}</p>
            <button className="seat-section">{ticket.seatSection}</button>
            <button className="view-profile" onClick={viewSellerProfile}>
              {" "}
              View Seller Profile{" "}
            </button>
            <div className="buy-now">Buy Now Price: ${ticket.price}</div>
            <button className="details" onClick={handleDetailsClick}>
              Details
            </button>
            <button className="deleteButton" onClick={handleDelete}>
              Remove Ticket
            </button>
          </div>
        ))}
        {/* <h2>{tickets.eventName}</h2>
      <p>{tickets.location}</p>
      <p>{tickets.dateTime}</p>
      <p>{tickets.description}</p>
      <button className="seat-section">{tickets.seatSection}</button>
      <button className="view-profile" onClick={viewSellerProfile}>
        {" "}
        View Seller Profile{" "}
      </button>
      <div className="buy-now">Buy Now Price: ${tickets.price}</div>
      <button className="details" onClick={handleDetailsClick}>
        Details
      </button>
      <button className="deleteButton" onClick={handleDelete}>
        Remove Ticket
      </button> */}
      </div>
    </>
  );
}

export default EventCard;
