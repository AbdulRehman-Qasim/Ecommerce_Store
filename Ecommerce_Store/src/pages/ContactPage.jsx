import React from "react";
import { Footer, Navbar } from "../components";
import "./ContactPage.css"; // 👈 import the CSS here

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page container">
        <h1 className="text-center contact-title">Contact Us</h1>
        <hr className="mb-5" />

        {/* Info Card */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card contact-card">
              <div className="card-body">
                <h5 className="card-title mb-3">We're Here to Help!</h5>
                <p className="card-text">
                  Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions. Fill in the form below and we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card contact-card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Send a Message</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="Message" className="form-label">Message</label>
                    <textarea
                      rows={5}
                      className="form-control"
                      id="Message"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="contact-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
