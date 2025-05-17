type CardProps = {
  title: string;
  description: string;
  image: string;
};

export function Hero() {
  const cards: CardProps[] = [
    {
      title: "Create events",
      description:
        "Easily set up your event with all the essential details—name, time, location, price, and available seats. No technical skills required.",
      image: "src/assets/icons/landing/calendar.svg",
    },
    {
      title: "Share links",
      description:
        "Get a unique event link instantly. Share it via WhatsApp, social media, or email so your audience can find and RSVP in one click.",
      image: "src/assets/icons/landing/link-square.svg",
    },
    {
      title: "Collect RSVPs",
      description:
        "Track who’s attending, receive payments, and automatically send QR codes with seat numbers to each guest. Smooth, secure, and reliable.",
      image: "src/assets/icons/landing/receipt-text.svg",
    },
  ];
  return (
    <div className="h-screen grid grid-cols-2 px-20 gap-8">
      <section className="flex flex-col gap-8">
        <article className="font-inter flex flex-col gap-8">
          <h2 className="text-4xl font-bold">
            Create <span className="text-primary-600 ">Events</span>, Share{" "}
            <span className="text-primary-600">Links</span> Collect{" "}
            <span className="text-primary-600">RSPV</span>
          </h2>
          <p>
            Set up your event in minutes, share our link, and guests book with
            secure payment and auto-generate QR codes
          </p>
        </article>

        {/* quick links */}
        <div className="flex gap-5">
          <a href="/" className="py-3 p-4 bg-primary-600 text-white ">
            Get started
          </a>
          <a href="/" className="py-3 p-4 bg-white text-black border ">
            How it works
          </a>
        </div>

        <section className="grid grid-flow-col gap-4">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </section>
      </section>

      {/* image section */}
      <section className="grid grid-flow-col gap-4">
        <div className="flex flex-col gap-4">
          <img
            src="/images/landing/hero-1.png"
            alt="hero image 1"
            className=" object-contain"
          />

          <img
            src="/images/landing/hero-2.png"
            alt="hero image 2"
            className=" object-contain"
          />
        </div>

        <img src="/images/landing/hero-3.png" />
      </section>

      {/* cards section */}
    </div>
  );
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="font-inter flex flex-col gap-3 ">
      <img src={image} alt={""} className="" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
