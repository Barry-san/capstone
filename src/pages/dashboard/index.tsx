import Sidebar from "./components/sidebar";
import Events from "./components/events";
import { useState } from "react";
import CreateEventForm from "./components/create-event";

export default function DashboardPage() {
  const [isCreating, setCreating] = useState(false);
  return (
    <>
      <main className=" min-h-screen flex gap-4">
        <Sidebar />

        <section className="px-6 w-full flex flex-col gap-4">
          <nav className="w-full flex items-center justify-between p-4 bg-blue-100">
            <h1 className="text-lg">Dashboard</h1>
            <button
              className="rounded bg-blue-500 px-3 py-2"
              onClick={() => setCreating(!isCreating)}
            >
              {" "}
              Add Event +{" "}
            </button>
          </nav>
          <Events />
          {isCreating && (
            <div className="flex flex-col items-center justify-center w-full h-screen fixed left-0 right-0 top-0 bottom-0 z-10 bg-primary-300/50">
              <CreateEventForm closeForm={() => {}} />
              <button onClick={() => setCreating(false)}>Close</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
