import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

const PartnerContent = ({ partner }) => {
  //console.log("dataaa", partner);
  return (
    <>
      {/* <div className="partner-area ptb-110 bg-f2f6f9">
      <div className="container">
        <div className="section-title">
          <h2>Featured Customers & Partners</h2>
          <p>
            We work with trusted partners to provide you the best possible
            experience. Our only goal is to save time.
          </p>
        </div>

        <div className="customers-partner-list">
          {partnes.map((partner, index) => {
            return (
              <div key={index.toString()} className="partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={partner} alt="image" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div> */}
      <div className="partner-section ptb-110 bg-f2f6f9">
        <br />
        <br />
        <div className="container">
          <div className="section-title">
            <h2>Our Partners</h2>
            <p>
              We work with trusted partners to provide you the best possible
              experience. Our only goal is to save time.
            </p>
          </div>

          <div className="customers-partner-list">
            {partner.map((datum, index) => {
              return (
                <div key={index.toString()} className="partner-item">
                  <a href="" rel="noreferrer">
                    <img
                      src={`${process.env.NEXT_PUBLIC_ASSETS_ORIGIN}${datum?.attributes?.image?.data?.attributes?.url}`}
                      alt={datum?.attributes?.name}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
