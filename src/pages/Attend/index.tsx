import { useState } from "react";
import CreateEventForm from "../dashboard/components/create-event";
import Events from "./attendeeEvents";
import Sidebar from "../dashboard/components/sidebar";

export default function Attendee() {
  const [isJoining, setIsJoining] = useState(false);
  return (
    <>
      <main className=" min-h-screen flex gap-4">
        <Sidebar />

        <section className="px-6 py-2 w-full flex flex-col gap-4">
          <nav className="w-full flex items-center justify-between p-4 bg-blue-100">
            <h1 className="text-xl font-bold">Events</h1>
          </nav>
          <Events />
          {isJoining && (
            <div className="flex flex-col items-center justify-center w-full h-screen fixed left-0 right-0 top-0 bottom-0 z-10 bg-primary-300/50">
              <CreateEventForm closeForm={() => {}} />
              <button onClick={() => setIsJoining(false)}>Close</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
