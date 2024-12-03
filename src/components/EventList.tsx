"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

function EventList() {
  const events = useQuery(api.events.get);
  console.log(events);
  return <div>EventList</div>;
}

export default EventList;
