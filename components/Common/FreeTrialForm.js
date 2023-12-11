import React, { Component } from "react";
import Link from "next/link";

class FreeTrialForm extends Component {
  render() {
    return (
      <section className="free-trial-area">
        <div className="row m-0 free-trial-image">
          <div className="col-lg-6 col-md-12 p-0">
            <div >
              <img src="/images/gmAll.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-content ">

              <h2 className="">Feel free to contact us</h2>
              <br/>
              <p className="">At GM Logistics We make your needs our priority.</p>

        
              <div className="btn-box">
                <Link href="/contact">
                  <a className="btn btn-primary">Contact Us</a>
                </Link>

                <Link href="/about">
                  <a className="optional-btn">Get To Know Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrialForm;
