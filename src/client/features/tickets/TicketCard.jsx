import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTicketMutation } from "./TicketSlice";
import AddTicketForm from "./AddTicketForm";

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/user/${id}`);
  };

  const viewSellerProfile = () => {
    navigate(`/user/${id}`);
  };

  const [deleteTicket] = useDeleteTicketMutation();
  const handleDelete = async () => {
    try {
      await deleteTicket(ticket.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="ticket-card">
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
      <div>
        <form className="add-ticket-form">
          <AddTicketForm />
        </form>
      </div>
    </>
  );
}

export default TicketCard;
