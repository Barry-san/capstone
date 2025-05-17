// import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="p-10 flex flex-col items-center font-display bg-primary-50 text-sm gap-6">
      <div className="container mx-auto grid grid-cols-4 gap-10 py-6">
        <section>
          <article className="flex flex-col gap-5 items-start ">
            <div className="text-2xl text-primary-700 flex gap-2">
              <img src="/images/logo.svg" />
              <span>Eventify</span>
            </div>
            <p>
              Eventify gives you the blocks and components you need to create
              and manage your events.
            </p>
          </article>
        </section>

        {/* product section */}

        <FooterSection
          title="Product"
          links={[
            { title: "Create event" },
            { title: "Browse Events" },
            { title: "QR check-in" },
          ]}
        />

        <FooterSection
          title="company"
          links={[
            { title: "About us" },
            { title: "Contact" },
            // { title: "QR check-in" },
          ]}
        />
      </div>

      <p>
        &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
      </p>
    </footer>
  );
}

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: { title: string; href?: string }[];
}) {
  return (
    <section className="flex flex-col gap-6 items-start">
      <h2 className="uppercase">{title}</h2>
      <ul className="flex flex-col gap-3 capitalize">
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.href ?? "/"}>{link.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
