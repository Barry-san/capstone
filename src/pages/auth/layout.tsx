const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid md:grid-cols-2 p-6 min-h-screen">
      <Banner />
      <section className="flex items-center justify-center p-6 bg-neutral-50">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/auth/banner.png')" }}
      className="hidden md:block bg-cover bg-center w-full h-full"
    ></div>
  );
};
