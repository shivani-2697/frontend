import { Link } from "react-router-dom"
import { Header } from "./Header"
import "./Aboutus.css"
export const About=()=>{
    return(
        <>
        <Header/>
        {/* this is about page */}
        <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Our Store</h1>
          <p>
            Welcome to our online store — your one-stop destination for
            quality products at affordable prices.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Our Store"
          />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are a customer-focused e-commerce store dedicated to making
            online shopping simple, convenient, and enjoyable.
          </p>

          <p>
            Our goal is to provide high-quality products, affordable prices,
            secure payments, and fast delivery to our customers.
          </p>

          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              We provide quick and reliable delivery right to your doorstep.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>
              We carefully select products to provide the best quality.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>
              Your payments and personal information are safe with us.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Customer Support</h3>
            <p>
              Our support team is always ready to help you with your queries.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Brands</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </section>

    </div>
  );
```

        
        </>
    )
}