import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Webinar = () => {
  //   const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Solutions Pillars</h2>
              <ul>
                <li>Empower employees</li>
                <li>Engage customers</li>
                <li>Optimize operations</li>
                <li>Transform Products</li>
              </ul>
              <Link href="/contact">
                <a className="btn btn-primary">Contact Us</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="webinar-video-image">
              <img src="/images/woman.png" alt="image" />

              <div
                // onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
