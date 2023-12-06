import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTicketMutation } from "./TicketSlice";
// import AddTicketForm from "./AddTicketForm";

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/user/${id}`);
  };

  const viewSellerProfile = () => {
    navigate(`/user/${id}`);
   };

  const [deleteTicket] = useDeleteTicketMutation();
  const handleDelete = () => {
    deleteTicket();
    navigate(`/tickets/${id}`);
  };

  return (
    <>
      {/* <form className="add-ticket-form">
        <AddTicketForm />
      </form> */}
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
        <div className="buy-now">Buy Now Price: ${price}</div>
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

export default TicketCard;
