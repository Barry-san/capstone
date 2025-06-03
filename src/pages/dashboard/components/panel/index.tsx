export default function Panel() {
  return (
    <div>
      <nav className="flex itmes-center justify-between">
        <h1>Dashboard</h1>
        <button className="bg-blue-500 px-3 py-2 text-white">Add event</button>
      </nav>
      <section className="grid grid-cols-3 gap-10">
        <div className="rounded-md p-3">
          <h2 className="font-semibold border-b">Upcoming Events</h2>
          <p>Barry's birthday - June 7, 2025</p>
        </div>
      </section>
    </div>
  );
}
