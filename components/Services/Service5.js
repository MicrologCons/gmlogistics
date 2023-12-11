import React, { Component } from "react";

class ServiceFive extends Component {
  render() {
    return (
      <section className="about-area ptb-110 bg-2439A7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/marchand.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
              <h3>
Merchandising
</h3>
<p>Retail support services which offer a complete merchandising solution which enables
customers and staff to find the correct stock in the correct location.</p>

  <h6>We offer the following services:

</h6>
<p >In-store Merchandising
</p>
<p>
New Store Setup and Relocations

</p>

<p>Peak Store Support, Store Resets and Remodels

</p>
<p>Product and Display Audits
</p>
<p>
Electronic Shelf Labelling (ESL)

</p>
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

export default ServiceFive;
