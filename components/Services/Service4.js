import React, { Component } from "react";

class ServiceFour extends Component {
  render() {
    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
              <h2>
Store Layout and Compliance
</h2>
<p>Understand the details of your selling space,
including floor plans, fixtures, planograms,
and store conditions.</p>

  <h6>We provide the following store layout and
compliance services:
</h6>
<p >Fixture Audit
</p>
<p>
Full Store Layout Survey
</p>

<p>Loss Prevention Audits
</p>
<p>Compliance Audit Services

</p>
               
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
              <img src="/images/list.jpg" alt="image" />
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

export default ServiceFour;
