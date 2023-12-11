import React, { Component } from "react";

class AboutContact extends Component {
  render() {
    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about4.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>creating value through technology</h2>
                <p>
                  Microlog Consulting is an IT consulting firm based in the DRC
                  with offices in Kinshasa, Lubumbashi, and Kolwezi. We help
                  organizations to create stakeholder value through digital
                  transformation solutions with a focus on empowering employees,
                  engaging customers, optimizing operations, and transforming
                  products. At Microlog we use a proven tailored approach to
                  assist companies of all sizes to realize benefits at an
                  optimal resource cost while optimizing risk. Our team of
                  experienced IT professionals and partners can help you get the
                  most out of your IT investments.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <div className="current">
                    <i>
                      <img src={"/images/icons/vision.png"} alt="icon" />
                    </i>
                    <h3>Our Vision</h3>
                  </div>

                  <p>
                    Our vision is to enable organizations to create value
                    through digital transformation.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <div className="current">
                    <i>
                      <img src={"/images/icons/mission.png"} alt="icon" />
                    </i>
                    <h3>Our Mission</h3>
                  </div>
                  <p>
                    We are on a mission to provide digital transformation
                    solutions that create value for our customers.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <div className="current">
                    <i>
                      <img src={"/images/icons/value.png"} alt="icon" />
                    </i>
                    <h3>Our Values</h3>
                  </div>
                  <p>
                    Innovation, Passion, Agility, Customer value, Integrity and
                    Accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default AboutContact;
