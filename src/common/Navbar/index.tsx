export function Navbar() {
  return (
    <header className="flex items-center justify-between p-5 bg-white shadow-md">
      <div>
        <span className="text-primary-700 font-sans">Pinit</span>
      </div>

      <nav className="flex gap-7">
        <ul className="flex gap-4">
          <li className="border border-black px-5 py-2.5">
            <a href="/events">Log in </a>
          </li>
          <li className="text-white bg-primary-600 px-5 py-2.5">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
