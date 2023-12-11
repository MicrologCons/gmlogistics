import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";


const Index = ({}) => {


  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="GM Logistics is a supply chain company based in DRC Kinshasa, Lubumbashi, and Kolwezi."
        />
        <meta property="og:title" content="GM Logistics" />
        <meta
          property="og:description"
          content="Welcome to the GM Logistics's Homepage. "
        />
        <meta
          property="og:image"
          content="https://gmlogistics-cd.com/images/logo3.png"
        />
        <meta property="twitter:title" content="GM Logistics" />
        <meta
          property="twitter:description"
          content="GM Logistics is a supply chain company based in DRC Kinshasa, Lubumbashi, and Kolwezi."
        />
        <meta property="og:image:width" content="1920"></meta>
      
        <meta property="og:type" content="website" />
      </Head>
      <NextSeo
        title="GM Logistics - Homepage"
        description="Welcome to the GM Logistics's Homepage. We are an IT consulting and Supply chain firm based in the DRC. We are the leader trainers of Microsoft 365 in Kinshasa, Lubumbashi, and Kolwezi."
        canonical="https://gmlogistics-cd.com/"
        openGraph={{
          url: "https://gmlogistics-cd.com",
          title: "GM Logistics - Homepage",
          description:
            "Welcome to the GM Logistics's Homepage. We are an IT consulting and Supply chain firm based in the DRC. We are the leader trainers of Microsoft 365 in Kinshasa, Lubumbashi, and Kolwezi.",
          images: [
            {
              url: "https://gmlogistics-cd.com/images/logo3.png",
              width: 1920,
              height: 1080,
              alt: "logo",
            },
          ],

          siteName: "GM Logistics",
        }}
       
    
      />
      <Navbar />
      <MainBanner id={"Home"}  />
      <About />
      <Services  />
    
      <FreeTrialForm />
      <Footer />
    </>
  );
};

export default Index;
