import { useGetTicketsQuery } from "./TicketSlice";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "./TicketCard";
function TicketList() {
  // const navigate = useNavigate();
  const { data: tickets, error, isLoading } = useGetTicketsQuery();
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <div className="ticket-list">
      <ul>
        {tickets.map((ticket) => (
          <EventCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
