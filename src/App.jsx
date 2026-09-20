import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Printify</div>
      <ul className="nav-links">
        <li>Catalog</li>
        <li>Pricing</li>
        <li>How it works ▾</li>
        <li>Solutions ▾</li>
        <li>Learn ▾</li>
        <li>Services ▾</li>
        <li>Support ▾</li>
      </ul>
      <div className="nav-buttons">
        <button className="btn btn-outline">Log In</button>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>CREATE AND SELL CUSTOM PRODUCTS</h1>
      <ul className="checklist">
        <li>✔ 100% Free to use</li>
        <li>✔ 2000+ products</li>
        <li>✔ Global delivery</li>
      </ul>
      <button className="btn btn-primary btn-large">Get started for free</button>
      <p className="small-text">No credit card required</p>
      <div className="hero-image">
        <div className="tote-bag">Thank You Next</div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Select your product",
      text: "Choose from over 2000 top-quality products, from custom clothing to tech accessories",
    },
    {
      number: "2",
      title: "Add your design",
      text: "Use our free design tool to fully customize your print-on-demand products",
    },
    {
      number: "3",
      title: "Start selling",
      text: "You set your profit margin, we take care of production and delivery",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-left">
        <h2>Start with $0 investment</h2>
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <h3>
              {step.number}. {step.title}
            </h3>
            <p>{step.text}</p>
          </div>
        ))}
        <button className="btn btn-dark">Start designing</button>
        <p className="link-text">Learn more</p>
      </div>
      <div className="how-it-works-right">
        <div className="tote-bag-mockup">Yes You Can</div>
      </div>
    </section>
  );
}

function BestSellers() {
  const products = [
    "T-shirts",
    "Sweatshirt",
    "Mugs",
    "Hoodie",
    "Kids clothing",
    "Stickers",
    "Phone cases",
  ];

  return (
    <section className="best-sellers">
      <h2>Your next bestseller awaits</h2>
      <div className="product-row">
        {products.map((product) => (
          <div className="product-card" key={product}>
            <div className="product-image"></div>
            <p>{product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ideas() {
  return (
    <section className="ideas">
      <h2>Ideas and inspiration</h2>
      <div className="ideas-grid">
        <div className="idea-box big"></div>
        <div className="idea-box wide"></div>
        <div className="idea-box"></div>
        <div className="idea-box"></div>
      </div>
    </section>
  );
}

function Earnings() {
  const products = ["T-shirt", "Hoodie", "Socks", "Phone case", "Notebook"];

  return (
    <section className="earnings">
      <div className="earnings-left"></div>
      <div className="earnings-right">
        <h2>See how much you can make:</h2>
        <p className="fulfillment-cost">Fulfillment cost*: $9.64</p>

        <h4>Choose a product</h4>
        <div className="product-tabs">
          {products.map((product) => (
            <span className="tab" key={product}>
              {product}
            </span>
          ))}
        </div>

        <h4>Quantity and price</h4>
        <label>Sell it for: $20</label>
        <input type="range" min="0" max="100" defaultValue="20" />

        <label>Daily sales: 1</label>
        <input type="range" min="0" max="10" defaultValue="1" />

        <div className="earnings-box">
          <p>Your monthly earnings:</p>
          <h2>$321.16</h2>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial">
      <h2>Real people use Printify</h2>
      <div className="testimonial-content">
        <div className="testimonial-video">▶</div>
        <div className="testimonial-text">
          <p>
            "I've been using Printify for about two years, it allowed me to
            quit my job within 9 months. Now I'm in Bali being a digital
            nomad and working on my store"
          </p>
          <p className="author">Christina Umerez, Toronto</p>
          <p className="link-text">Read more real-life stories of success</p>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className="get-started">
      <h2>Get started today 100% free</h2>
      <button className="btn btn-dark">Get started</button>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: "Connect",
      links: [
        "Etsy",
        "Shopify",
        "TikTok Shop",
        "Amazon",
        "eBay",
        "PrestaShop",
        "BigCommerce",
        "Wix",
        "WooCommerce",
        "Squarespace",
        "Printify API",
        "Printify Pop-Up Store",
        "Shutterstock",
      ],
    },
    {
      title: "Discover",
      links: [
        "Brands",
        "Pricing",
        "Deals",
        "Product Creator",
        "Mockup Generator",
        "Start a clothing brand",
        "Start a POD business",
        "Make your own shirt",
        "Sell on social media",
        "Mobile App",
      ],
    },
    {
      title: "Start selling",
      links: [
        "Products",
        "Custom clothing",
        "Custom t-shirts",
        "Custom hoodies",
        "Custom all-over-print hoodies",
        "Custom mugs",
        "Custom socks",
        "Custom backpacks",
        "Custom phone cases",
        "Custom branding",
        "Free t-shirt designs",
        "Bulk orders",
        "Transferring to Printify",
      ],
    },
    {
      title: "Learn",
      links: [
        "Blog",
        "Guides",
        "Help Center",
        "Knowledge Hub",
        "Print on Demand",
        "Sell on Etsy",
        "Etsy + Print on Demand",
        "Shopify + Print on Demand",
        "WooCommerce + Print on Demand",
        "Wix + Print on Demand",
        "Squarespace + Print on Demand",
        "POD Glossary",
      ],
    },
    {
      title: "Printify",
      links: [
        "About",
        "Policies",
        "Jobs",
        "Contact us",
        "Reviews",
        "Print Providers",
        "Become a partner",
        "Affiliates",
        "Sustainability",
        "Talk to Sales",
        "Network Fulfillment Status",
        "Merchant protection",
        "Accessibility Statement",
        "Sitemap",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo footer-logo">Printify</div>
        <div className="social-icons">
          <span>TikTok</span>
          <span>Threads</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>Reddit</span>
          <span>X</span>
          <span>YouTube</span>
        </div>
      </div>
      <div className="footer-columns">
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BestSellers />
      <Ideas />
      <Earnings />
      <Testimonial />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;