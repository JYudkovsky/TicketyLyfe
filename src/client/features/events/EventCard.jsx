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
        <h2>{event.eventName}</h2>
        <p>{event.location}</p>
        <p>{event.dateTime}</p>
        <p>{event.description}</p>
        <button className="seat-section">{event.seatSection}</button>
        <button className="view-profile" onClick={viewSellerProfile}>
          {" "}
          View Seller Profile{" "}
        </button>
        <div className="buy-now">Buy Now Price: ${event.price}</div>
        <button className="details" onClick={handleDetailsClick}>
          Details
        </button>
        <button className="deleteButton" onClick={handleDelete}>
          Remove Ticket
        </button>

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
