import React, { Component } from "react";
import { Icon } from "@iconify/react";
import ServiceOne from "../Services/Service1";
import ServiceTwo from "../Services/Service2";
import ServiceTree from "../Services/Service3";
import ServiceFour from "../Services/Service4";
import ServiceFive from "../Services/Service5";



  
const Services = ({ data }) => {
  //console.log("data", data);
  return (
    <section id="Service" className="">
      <ServiceOne />
      <ServiceTwo/>
      <ServiceTree/>
      <ServiceFour/>
      <ServiceFive/>
    </section>
  );
};

export default Services;
