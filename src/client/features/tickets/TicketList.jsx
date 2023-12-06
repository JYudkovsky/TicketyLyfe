import { useGetTicketsQuery } from "./TicketSlice";;
import TicketCard from "./TicketCard";
<<<<<<< HEAD
=======

>>>>>>> c8a85f189030750d25ddfa2c4b3adfe19cb1631e
function TicketList() {
  const { data: tickets, error, isLoading } = useGetTicketsQuery();
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <div className="ticket-list">
      <ul>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
