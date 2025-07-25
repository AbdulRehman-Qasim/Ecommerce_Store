import React, { useEffect, useRef } from "react";

const Home = () => {
  const productsRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .home-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #6a0dad, #4b0082);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        flex-direction: column;
      }

      .hero-image {
        background-image: url('/assets/main.png.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
        position: relative;
      }

      .frosted-overlay {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10%;
      }

      .hero-content {
        max-width: 700px;
        color: #fff;
        animation: fadeIn 1.5s ease-in-out;
      }

      .gradient-text {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(to right, #ff69b4, #8a2be2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .product-section {
        background: #fff;
        width: 100%;
        padding: 80px 10%;
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s ease;
      }

      .product-section.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .product-heading {
        font-size: 2rem;
        font-weight: bold;
        color: #4b0082;
        margin-bottom: 20px;
        text-align: center;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-image">
        <div className="frosted-overlay">
          <div className="hero-content">
            <h1 className="gradient-text">New Season Arrivals</h1>
            <p className="lead text-light mt-3">
              Discover the latest collection of premium styles tailored for
              modern elegance. Elevate your wardrobe with exclusive offers.
            </p>
            <button
              className="btn btn-lg btn-light fw-bold mt-4 shadow"
              onClick={scrollToProducts}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section ref={productsRef} className="product-section" id="products">
        <h2 className="product-heading">Our Latest Products</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          Browse our handpicked selection of clothing and accessories!
        </p>
        {/* Add your product cards here */}
      </section>
    </div>
  );
};

export default Home;
