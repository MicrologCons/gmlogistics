import React, { Component } from "react";

class ServiceOne extends Component {
  render() {
    return (
      <section className="about-area ptb-110 bg-2439A7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/logistics.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Logistics</h2>
                <h6>Delivery
       </h6>
<p className="text-justify">We can ensure delivery of goods to destination. The supply is made by a specialized service, the
purchasing service or the logistics service which will take care of managing the stock and the
transport. Purchasing policy is that of the customer.
</p>
<h6>Product flow management
</h6>
<p>
This is the follow-up of the order, the respect of the deadline. Prepare, execute, and close
transport orders to final destination.
</p>
<h6>Receipt of goods
</h6>
<p>Verification of delivered products.
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

export default ServiceOne;
