import { useAuthContext } from "@/context/authProvider";

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-20 py-6 bg-white">
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" />
        <span className="text-primary-700 font-sans text-2xl">Eventify</span>
      </div>

      <nav className="flex gap-7">
        <ul className="flex gap-4">
          <li className="border border-black px-3 py-2.5">
            <a href="/auth/login">Log in </a>
          </li>
          <li className="text-white bg-primary-600 px-3 py-2.5">
            <a href="/auth/register">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
