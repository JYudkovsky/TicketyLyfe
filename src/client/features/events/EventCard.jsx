import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteEventMutation } from "./EventSlice";

function EventCard({
  event,
  // id,
  // eventName,
  // location,
  // dateTime,
  // description,
  // seatSection,
  // sellerProfile,
  // price,
}) {
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
    <div className="event-card">
      <h2>{event.tickets.eventName}</h2>
      <p>{event.tickets.location}</p>
      <p>{event.tickets.dateTime}</p>
      <p>{event.tickets.description}</p>
      <button className="seat-section">{event.tickets.seatSection}</button>
      <button className="view-profile" onClick={viewSellerProfile}>
        {" "}
        View Seller Profile{" "}
      </button>
      <div className="buy-now">Buy Now Price: ${event.tickets.price}</div>
      <button className="details" onClick={handleDetailsClick}>
        Details
      </button>
      <button className="deleteButton" onClick={handleDelete}>
        Remove Ticket
      </button>
    </div>
  );
}

export default EventCard;
