import React, { Component } from "react";
import Link from "next/link";


const Footer = () => {
  let currentYear = new Date().getFullYear();


  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo3.png" alt="image" />
                </a>
            
              </div>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Services</h3>

              <ul className="footer-services-list">
                
                    <li>
                      <Link
                        href=""
                      >
                        <a>Logistics</a>
                      </Link>
                    </li>
                       
                    <li>
                      <Link
                        href=""
                      >
                        <a>Merchandising</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                      >
                        <a>Stocktaking Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                      >
                        <a>Supply Chain Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                      >
                        <a>Store Layout and Compliance</a>
                      </Link>
                    </li>
                  
              
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Quick Links</h3>

              <ul className="quick-links-list">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Service</a>
                  </Link>
                </li>
             
              
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contacts</h3>

              <ul className="footer-contact-list">
                <li>
                  <span>Addresses</span> <br />
                  République Démocratique du Congo:
                </li>
                <li>
                  {" "}
                  <span>Lubumbashi</span>: 7079 Av. Munongo (Kasai), Q. Makutano
                  <br />
                  <span>Kolwezi</span>: 238 Av. Mukaka, Q. Industriel, C. Manika
                  <br />
                  <span>Kinshasa</span>: 14 Av. De la Justice C. de la Gombe
                </li>
                <li>
                  <span>Email:</span>
                  <a
                    href="mailto:contact@microlog.tech"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    contact@microlog.tech
                  </a>
                </li>
                <li>
                  <span>Phone:</span>
                  <a
                    href="tel:+243890008505"
                    className="contact"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    +243 89 000 85 05
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>
                Copyright &copy;{currentYear} GM Logistics. All Rights
                Reserved.
              </p>
            </div>

        
          </div>
        </div>
      </div>

      <div className="circle-map">
        <img src="/images/circle-map.png" alt="image" />
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </footer>
  );
};

export default Footer;
