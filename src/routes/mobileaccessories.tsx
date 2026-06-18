import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import productHero from "@/assets/about-stage.jpg"; 
import mobileBanner from "@/assets/mobile.png"; 
import product1 from "@/assets/product1.png";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.webp";

export const Route = createFileRoute("/mobileaccessories")({
  head: () => ({
    meta: [
      { title: "Premium Mobile Accessories — Rapid Rashmi" },
      { name: "description", content: "Curated, high-quality cases, chargers, and premium essentials for your daily devices." },
      { property: "og:title", content: "Premium Mobile Accessories — Rapid Rashmi" },
      { property: "og:description", content: "Curated premium mobile essentials." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const products = [
  {
    id: "p1",
    image: product1,
    category: "Cases",
    title: "Sticky Mobile Suction Holder",
    price: "₹199",
    oldPrice: "₹399",
    description: "Sticky Mobile Suction Holder, Mounting Type: Back Grip"
  },
  {
    id: "p2",
    image: product2,
    category: "Power",
    title: "Wireless Powerbank",
    price: "₹999",
    oldPrice: "₹1,599",
    description: "UGREEN Wireless Powerbank 10000mAh Magnetic Power Bank with USB-C Fast Charging Function,"
  },
  {
    id: "p3",
    image: product3,
    category: "Audio",
    title: "Bluetooth Headphones",
    price: "₹1,499",
    oldPrice: "₹2,299",
    description: "Bluetooth Headphones, Premium Active Noise Cancelling Wireless Headphones Over Ear"
  },
  {
    id: "p4",
    image: product4,
    category: "Accessories",
    title: "Mobile Charger",
    price: "₹299",
    oldPrice: "₹499",
    description: "Charge 25W Black Type-C Mobile Charger"
  },
  {
    id: "p5",
    image: product5,
    category: "Essentials",
    title: "iPhone 15 Wooden Mobile Cover",
    price: "₹399",
    oldPrice: "₹899",
    description: "iPhone 15 Series Wooden Mobile Cover iPhone 15."
  },
];

const features = [
  { area: "Materials", details: "Premium anodized alloys and eco-certified grain leather.", context: "Sourced responsibly" },
  { area: "Architecture", details: "Calibrated precision drops and rigorous heat shielding.", context: "Engineered specs" },
  { area: "Longevity", details: "Backed entirely by a dedicated three-year repair architecture.", context: "Our Guarantee" },
];

function Shop() {
  return (
    <SiteLayout>
      {/* - `pt-16 sm:pt-20` maintains space below your navbar.
        - `aspect-video` enforces a strict 16:9 shape across all devices.
        - `object-contain` ensures the entire graphic scales into view without cropping.
      */}
      <div className="w-full bg-card border-b border-border ">
        <div className="mx-auto max-w-7xl w-full aspect-video overflow-hidden">
          <img
            src={mobileBanner}
            alt="Mobile Accessories Collection Banner"
            loading="eager"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      <PageHeader
        eyebrow="The Collection"
        title={<>Refined utility, tactile precision, and <span className="italic">device essentials.</span></>}
        intro="A highly curated suite of technical accessories crafted to elevate daily interactions. Engineered with precision and finished in minimalist luxury."
      />

      {/* Main Catalog List Section */}
      <section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-12 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
        Best Sellers
      </p>
      <h2 className="mt-4 font-display text-4xl md:text-5xl">
        Premium Mobile Accessories
      </h2>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Carefully selected accessories designed to enhance your everyday
        mobile experience.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {products.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="overflow-hidden bg-background">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {product.category}
            </span>

            <h3 className="mt-4 font-display text-2xl">
              {product.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-bold">
                {product.price}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {product.oldPrice}
              </span>
            </div>

            <button
              className="mt-6 w-full rounded-xl border border-foreground py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Customer Reviews Section */}
<section className="border-t border-border bg-card py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-16 text-center">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
        Customer Reviews
      </p>
      <h2 className="font-display text-4xl tracking-tight">
        Trusted by Mobile Accessory Enthusiasts
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="border border-border p-8">
        <div className="mb-4 text-xl">★★★★★</div>
        <p className="mb-6 text-muted-foreground">
          "The charging cable quality exceeded my expectations. Fast charging,
          durable build, and premium finish. Definitely worth it."
        </p>
        <div>
          <p className="font-display text-lg">Rahul Sharma</p>
          <p className="text-sm text-muted-foreground">
            Purchased USB-C Fast Charging Cable
          </p>
        </div>
      </div>

      <div className="border border-border p-8">
        <div className="mb-4 text-xl">★★★★★</div>
        <p className="mb-6 text-muted-foreground">
          "The phone case fits perfectly and feels luxurious in hand. Delivery
          was quick and packaging was excellent."
        </p>
        <div>
          <p className="font-display text-lg">Priya Verma</p>
          <p className="text-sm text-muted-foreground">
            Purchased Premium Leather Case
          </p>
        </div>
      </div>

      <div className="border border-border p-8">
        <div className="mb-4 text-xl">★★★★★</div>
        <p className="mb-6 text-muted-foreground">
          "Bought wireless earbuds and a charger together. Both products work
          flawlessly and look premium."
        </p>
        <div>
          <p className="font-display text-lg">Amit Singh</p>
          <p className="text-sm text-muted-foreground">
            Purchased ANC Earbuds & Charging Dock
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Shipping / Support Call to Action Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Global Fulfillment</p>
          <h2 className="mb-6 font-display text-4xl md:text-5xl">Carefully packed, globally dispatched.</h2>
          <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
            Complimentary carbon-neutral standard delivery on all collective items.
            Every shipment arrives housed inside custom, fully recyclable protective shielding.
          </p>
          <a
            href="#"
            className="inline-block border border-foreground px-10 py-4 text-[11px] uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            View Shipping Manifesto (.pdf)
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}