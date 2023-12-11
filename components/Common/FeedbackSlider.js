import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

class FeedbackSlider extends Component {
  render() {
    return (
      <>
        <div className="feedback-area">
          <div className="container-flauid p-0">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 6000,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Autoplay]}
              className="feedback-slides"
            >
              <SwiperSlide>
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="feedback-item">
                      <p>
                        We offer IT solutions enable impactful digital
                        transformation across four pillars that enable
                        organizations to unlock value: empower employees, engage
                        customers, optimize operations, and transform products.
                      </p>

                      <div className="client-info">
                        <h3>IT Solutions</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="client-image bg2">
                      <img src="/images/clients/client3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="feedback-item">
                      <p>
                        We advance your supply chain by planning, implementing
                        and controlling supply chain operations with the goal of
                        satisfying the customer at the lowest possible cost.
                      </p>

                      <div className="client-info">
                        <h3>Supply Chain</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="client-image bg1">
                      <img src="/images/clients/client4.png" alt="image" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}

export default FeedbackSlider;
