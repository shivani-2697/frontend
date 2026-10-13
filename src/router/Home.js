import { Link } from "react-router-dom"
import { Header } from "./Header"
import "./Home.css";
const categories = [
  { icon: "👟", name: "Fashion" },
  { icon: "💻", name: "Electronics" },
  { icon: "🏠", name: "Home" },
  { icon: "💄", name: "Beauty" },
  { icon: "🎒", name: "Accessories" },
];

const products = [
  { name: "Classic Sneakers", price: "$59.99", oldPrice: "$79.99", icon: "👟", tag: "20% OFF" },
  { name: "Wireless Headphones", price: "$89.99", oldPrice: "$119.99", icon: "🎧", tag: "SALE" },
  { name: "Minimal Backpack", price: "$44.99", oldPrice: "$64.99", icon: "🎒", tag: "NEW" },
  { name: "Smart Watch", price: "$129.99", oldPrice: "$159.99", icon: "⌚", tag: "HOT" },
];
export const Home=()=>{
    return(
        <>
        <Header/>
        {/* this is home page */}
    
    <div className="app">

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">NEW SEASON • 2026</p>
            <h1>Find what you love.<br /><span>Shop what you need.</span></h1>
            <p className="hero-text">
              Discover trending products, everyday essentials and special deals
              made for you.
            </p>
            <div className="hero-buttons">
              <a className="primary-btn" href="#shop">Shop Now →</a>
              <a className="secondary-btn" href="#deals">View Deals</a>
            </div>
            <div className="trust-row">
              <span>✓ Free shipping over $50</span>
              <span>✓ Easy returns</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="sale-badge">UP TO<br /><strong>50%</strong><br />OFF</div>
            <div className="product-orb">🛍️</div>
            <div className="floating-card card-one">⭐ 4.9/5<br /><small>Happy customers</small></div>
            <div className="floating-card card-two">🚚 Fast delivery</div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>Shop by category</h2>
            </div>
            <a href="#shop">View all →</a>
          </div>

          <div className="categories">
            {categories.map((category) => (
              <a className="category-card" href="#shop" key={category.name}>
                <div className="category-icon">{category.icon}</div>
                <span>{category.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section products-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="section-label">TRENDING NOW</p>
              <h2>Popular products</h2>
            </div>
            <a href="#shop">View all →</a>
          </div>

          <div className="products">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <span className="product-tag">{product.tag}</span>
                  <button className="heart" aria-label="Add to wishlist">♡</button>
                  <div className="product-emoji">{product.icon}</div>
                </div>
                <div className="product-info">
                  <p className="rating">★★★★★ <span>(24)</span></p>
                  <h3>{product.name}</h3>
                  <div className="price">
                    <strong>{product.price}</strong>
                    <del>{product.oldPrice}</del>
                  </div>
                  <button className="add-btn">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="deal" id="deals">
          <div>
            <p className="section-label">LIMITED TIME OFFER</p>
            <h2>Big savings. Small prices.</h2>
            <p>Get up to 50% off selected products this week.</p>
            <a className="primary-btn" href="#shop">Shop the sale →</a>
          </div>
          <div className="deal-number">50<span>%</span></div>
        </section>
      </main>

      <footer>
        <div className="logo">Shop<span>ly</span></div>
        <p>© 2026 Shoply. Your everyday online store.</p>
      </footer>
    </div>
        
        </>
    )
}