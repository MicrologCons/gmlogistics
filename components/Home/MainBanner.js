import React, { Component } from "react";
import Link from "next/link";


const MainBanner = ({ id }) => {
  return (
    <section id={id} className="main-banner ">
      <div className="d-table ">
        <div className="d-table-cell">
          <div className="container-fluid">
            <div className="main-banner-content ">
              <h1>Welcome to GM 
                <br/>Logistics</h1>
            
              <div className="btn-box">
                <Link href="/contact">
                  <a className="btn btn-primary">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default MainBanner;
