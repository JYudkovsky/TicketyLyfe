import { useGetEventsQuery } from "./EventSlice";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
function EventList() {
  // const navigate = useNavigate();
  const { data: events, error, isLoading } = useGetEventsQuery();
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <div className="event-list">
      <ul>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
