import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #8ec5fc, #e0c3fc)",
        color: "#2c2c2c",
        padding: "16px 10px",
        fontFamily: "sans-serif",
      }}
    >
      <div className="container text-center">
        <h4 className="mb-2 fw-bold" style={{ fontSize: "18px" }}>
          Ecommerce Store
        </h4>

        <p className="mb-2 fst-italic" style={{ fontSize: "14px" }}>
          "Bringing innovation to your doorstep — one product at a time."
        </p>

        <div className="mb-2">
          {[
            { href: "https://github.com/", icon: "github" },
            { href: "https://linkedin.com/", icon: "linkedin" },
            { href: "https://facebook.com/", icon: "facebook" },
            { href: "https://twitter.com/", icon: "twitter" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-dark fs-5"
              style={{
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2c2c2c")}
            >
              <i className={`fa fa-${icon}`}></i>
            </a>
          ))}
        </div>

        <div className="mb-2" style={{ fontSize: "13px" }}>
          <a href="/about" className="text-decoration-none text-dark mx-2">
            About Us
          </a>{" "}
          |
          <a href="/privacy" className="text-decoration-none text-dark mx-2">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="text-decoration-none text-dark mx-2">
            Terms & Conditions
          </a>
        </div>

        <p className="mt-2" style={{ fontSize: "12px" }}>
          © {new Date().getFullYear()} Ecommerce Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
