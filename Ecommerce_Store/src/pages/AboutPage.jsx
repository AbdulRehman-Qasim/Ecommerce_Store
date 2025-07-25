import React from 'react';
import { Footer, Navbar } from "../components";
import './AboutPage.css'; // if stored in a styles folder

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="container py-5">
          <h1 className="text-center mb-4">About Us</h1>
          <p className="lead text-center">
            Welcome to <strong>Ecommerce Store</strong> — your ultimate destination for quality, affordability, and trust in eCommerce across Pakistan.
          </p>

          {/* Mission & Vision */}
          <div className="row my-5">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">🚀 Our Vision</h3>
                  <p>
                    To become Pakistan’s most trusted online marketplace — making it easy to shop anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">💼 Our Values</h3>
                  <ul>
                    <li>Customer First</li>
                    <li>Quality Assurance</li>
                    <li>Innovation</li>
                    <li>Transparency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <h2 className="text-center my-5">Our Categories</h2>
          <div className="row">
            {[
              { title: "Men's Clothing", img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { title: "Women's Clothing", img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { title: "Jewelry", img: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { title: "Electronics", img: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600' }
            ].map((cat, idx) => (
              <div className="col-md-3 col-sm-6 mb-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  <img src={cat.img} className="card-img-top" alt={cat.title} height={160} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{cat.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          <h2 className="text-center mt-5 mb-3">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                  What payment methods are accepted?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We accept cash on delivery, debit/credit cards, and popular digital wallets.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                  How long does delivery take?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Most orders are delivered within 2-5 business days, depending on your location.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                  Do you offer returns or exchanges?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes! You can return or exchange products within 7 days of delivery as per our return policy.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
