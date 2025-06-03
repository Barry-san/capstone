import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-primary-300  w-[25%] left-0 shadow-lg p-6 sticky top-0 h-screen overflow-y-auto">
      <nav className="flex flex-col gap-4">
        <Link to={"/dashboard"} className={"p-4 font-inter font-bold"}>
          DashBoard
        </Link>
        <Link to={"/attend"} className={"p-4 font-inter font-bold"}>
          Events
        </Link>
      </nav>
    </aside>
  );
}
