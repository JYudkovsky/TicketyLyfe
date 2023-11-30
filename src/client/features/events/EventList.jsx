import { useGetEventsQuery } from "./EventSlice";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
function EventList({ events }) {
  // const navigate = useNavigate();

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          kye={event.id}
          id={event.id}
          eventName={event.eventName}
          location={event.location}
          dateTime={event.dataTime}
          description={event.description}
          seatSection={event.seatSection}
          sellerProfile={event.sellerProfile}
          price={event.price}
        />
      ))}
    </div>
  );
}

export default EventList;
