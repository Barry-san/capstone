export function NotFound() {
  return (
    <main className="p-6 h-[80vh] flex flex-col justify-center border">
      <h1 className="text-6xl text-primary-600 font-bold ">
        404 | Page not found
      </h1>
      <p className="text-lg font-inter">
        Oopsie! The page you're looking for does not exist. Check your url and
        try again.
      </p>
    </main>
  );
}
