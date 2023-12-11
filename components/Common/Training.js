import React, { Component } from "react";
import Link from "next/link";

const trainings = [
  {
    id: 1,
    name: "Business Application",
    link: "/training",
    img: "images/training/train1.png",
  },
  {
    id: 1,
    name: "Document Management",
    link: "/training",
    img: "images/training/train2.png",
  },
  {
    id: 1,
    name: "Modern Collaboration",
    link: "/training",
    img: "images/training/train3.png",
  },
];

class Training extends Component {
  render() {
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Training</h2>
            <p>We offer specific training to meet your needs</p>
          </div>

          <div className="row">
            {trainings.map((training, index) => {
              return (
                <div key={index.toString()} className="col-lg-4 col-md-6">
                  <div className="single-blog-post">
                    <div className="entry-thumbnail">
                      <img src={training.img} alt="image" />
                    </div>

                    <div className="entry-post-content">
                      <h3>{training.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default Training;
