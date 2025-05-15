export function Footer() {
  return (
    <footer className="p-10 flex flex-col items-center font-display">
      <div className="container mx-auto text-center grid grid-cols-4 gap-10 "></div>

      <p>
        &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
      </p>
    </footer>
  );
}
