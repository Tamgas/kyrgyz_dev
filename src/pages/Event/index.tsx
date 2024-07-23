import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EventList } from "./EventList";
import useFetch from "../../components/hooks/useFetch";



function Events() {
  const events_url = "http://3.38.98.134/events"
  const {data, loding} = useFetch({
    url: events_url
  })
  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
      { 
       data && data.map((event: any) => {
        return (
          <EventList
          key={event.id}
          organization_name = {event.organization_name}
          name = {event.name}
          location = {event.location}
          created_at={event.created_at}
          updated_at={event.updated_at}
          gradient={event.gradient}
          cover = {event.cover}
          />
        )
       }) 
      }
      </div>
    </div>
  )
}
 
export default Events