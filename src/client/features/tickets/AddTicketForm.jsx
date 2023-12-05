import { useAddTicketMutation } from "./TicketSlice";
import { useState } from "react";

function AddTicketForm() {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [seatSection, setSeatSection] = useState("");
  const [addEvent] = useAddTicketMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addEvent({
        eventName,
        location,
        dateTime,
        description,
        seatSection,
      });

      setEventName("");
      setLocation("");
      setDateTime("");
      setDescription("");
      setSeatSection("");
    } catch (error) {
      console.error("Error when adding event", error);
    }
  };

  return (
    <>
      <form className="add-events-form" onSubmit={handleSubmit}>
        <label>
          Event Name :
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <lable>
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </lable>
        <lable>
          Date & Time
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </lable>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Seat/Section
          <input
            type="text"
            value={seatSection}
            onChange={(e) => setSeatSection(e.target.value)}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </>
  );
}
export default AddTicketForm;
