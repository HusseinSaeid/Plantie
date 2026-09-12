export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "90vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "80px 8%",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/hero.webp"
        alt="Botanical Care background"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center -z-20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(360deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.1) 50%, rgba(18, 18, 18, 0) 100%), linear-gradient(90deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.3) 50%, rgba(18, 18, 18, 0.1) 100%)",
        }}
      />

      <div style={{ maxWidth: "620px" }}>
        <div className="inline-flex items-center gap-1 py-1.5 px-4 border border-accent-primary bg-bg-surface-elevated rounded-[50px] mb-2">
          <span>🌿</span>100% Certified Organic
        </div>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            fontWeight: "700",
            lineHeight: "1.15",
            marginBottom: "20px",
            letterSpacing: "-0.5px",
          }}
        >
          Botanical Care <br />
          For Skin & Hair
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.6",
            marginBottom: "36px",
          }}
        >
          Pure organic extractions crafted to purify, hydrate, and restore your
          natural radiance from head to toe
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#products"
            className="btn btn-primary"
            type="button"
            aria-label="explore collection"
          >
            Explore Collection
          </a>

          <a
            href="#about-us"
            className="btn-secondary btn"
            type="button"
            aria-label="contact us"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
