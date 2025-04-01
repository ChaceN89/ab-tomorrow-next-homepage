import React from 'react';
import { eventData } from '@/data/eventData'; // Import event data
import EventCard from './EventCard';
import PageHeader from '@/components/common/PageHeader';

export default function Events() {
  const currentDate = new Date(); // Get today's date

  // Helper function to parse the event date string
  const parseDate = (dateString) => {
    const date = new Date(dateString); // Try to create a date from the given string
    return isNaN(date) ? null : date; // Return null if it's an invalid date
  };

  // Separate events into past and future events
  const futureEvents = eventData.filter(event => {
    // Check if any event's date is in the future or today
    return event.dates.some(date => {
      const eventDate = parseDate(date.date);
      return eventDate && eventDate >= currentDate; // If valid date and is future or today
    });
  });

  const pastEvents = eventData.filter(event => {
    // Check if all event's dates are in the past
    return event.dates.every(date => {
      const eventDate = parseDate(date.date);
      return eventDate && eventDate < currentDate; // If valid date and is in the past
    });
  });

  return (
    <div className='page-width'>
      <div className='page'>
        <PageHeader title='Webinars' subtitle="Join us for our upcoming webinars and watch past events." />
        
        {futureEvents.length > 0 && (
          <div className="future-events mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Future Events</h2>
            <div className="event-list">
              {futureEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="past-events">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Past Events</h2>
            <div className="event-list">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
