import React, { Component } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

class ContactFormContent extends Component {
  render() {
    return (
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Message Us</span>
            <h2>Drop us Message for any Query</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <span className="number">
                  <a
                    href="tel:+243890008505"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    +243 89 000 85 05
                  </a>
                </span>
                <span className="or">OR</span>
                <span className="email">
                  <a
                    href="mailto:contact@micrologcons.com"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    contact@microlog.tech
                  </a>
                </span>
              </h2>

              <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/microlog_cons"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/microlog-consulting/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/profile.php?id=100088112517570"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

           
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactFormContent;
