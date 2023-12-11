import React, { Component } from "react";

class ServiceTree extends Component {
  render() {
    return (
      <section className="about-area ptb-110 bg-2439A7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/supply.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Supply Chain Services</h2>
              
       <p> We believe that businesses can make
significant cost savings through labor
reductions and performance improvements
within their supply chain.</p>

  <h6>We offer the following supply chain services:
</h6>
<p >Supply Chain Audits

</p>
<p>
Delivery Checks and Pick Accuracy

</p>

<p>Warehouse Staff Support Services

</p>
<p>Good Faith Receiving

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

export default ServiceTree;
