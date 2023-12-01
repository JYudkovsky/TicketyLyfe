import { useGetEventsQuery } from "./EventSlice";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
function EventList() {
  // const navigate = useNavigate();
  const { data: e, error, isLoading } = useGetEventsQuery();
  if (isLoading) return <div> Loading . . . </div>;
  if (error) return <div> Error . . . </div>;

  return (
    <div className="event-list">
      {/* {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          eventName={event.eventName}
          location={event.location}
          dateTime={event.dataTime}
          description={event.description}
          seatSection={event.seatSection}
          sellerProfile={event.sellerProfile}
          price={event.price}
        />
      ))} */}

      <ul>
        {e?.map((E) => (
          <EventCard key={E.id} event={E} />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
