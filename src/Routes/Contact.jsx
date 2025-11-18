// src/pages/Contact.jsx
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4 bricolage-grotesque">
            Connect & Collaborate
          </h1>
          <p className="lead mulish">
            Bookings, collabs, or just jazz talk—reach out!
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Form */}
            <div className="col-lg-8">
              <div className="card card-jazz p-4">
                <h3 className="bricolage-grotesque mb-4">Drop a Note</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn custom-btn w-100">
                    Send Vibes
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-4">
              <div className="card card-jazz p-4 h-100">
                <h3 className="bricolage-grotesque mb-4">Details</h3>
                <div className="mb-3 d-flex align-items-center">
                  <FaPhone className="text-primary me-3 fs-5" />
                  <span>+1 (555) JAZZ-456</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="text-primary me-3 fs-5" />
                  <span>hello@seoula.com</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <FaMapMarkerAlt className="text-primary me-3 fs-5" />
                  <span>New York, NY</span>
                </div>
                <div className="mb-4 d-flex align-items-center">
                  <FaClock className="text-primary me-3 fs-5" />
                  <span>Open for gigs</span>
                </div>
                <h6 className="mb-3">Social</h6>
                <div className="d-flex gap-3">
                  <FaFacebook className="fs-4 text-primary" />
                  <FaInstagram className="fs-4 text-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="row mt-5">
            <div className="col-12">
              <div
                className="card card-jazz overflow-hidden"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.238!2d-73.987!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f5b753e1%3A0x2cb1d4d1f517f9e9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1731760000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
