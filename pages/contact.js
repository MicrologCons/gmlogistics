import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Contact = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="GM Logistics, We are the leader of Supply Chain Kinshasa, Lubumbashi, and Kolwezi."
        />
        <meta property="og:title" content="Contact us" />
        <meta
          property="og:description"
          content="Drop us a line by letting us know your needs."
        />

        <meta
          property="og:image"
          content="https://gmlogistics-cd.com/images/logo3.png"
        />
        <meta property="twitter:title" content="GM Logistics" />
        <meta
          property="twitter:description"
          content="GM Logistics is a supply chain company based in the DRC we are in Kinshasa, Lubumbashi, and Kolwezi."
        />
        <meta property="og:image:width" content="1920"></meta>
        <meta property="og:image:height" content="1080"></meta>
        <meta property="og:url" content="https://gmlogistics-cd.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <NextSeo
        title="GM Logistics - Contacts"
        description="Drop us a line by letting us know your needs. GM Logistics is a supply chain company based in the DRC."
        canonical="https://gmlogistics-cd.com/contact/"
        openGraph={{
          url: "https://gmlogistics-cd.com/contact/",
          title: "GM Logistics - Contacts",
          description:
            "Drop us a line by letting us know your needs. GM Logistics is a supply chain company based in the DRC.",
          images: [
            {
              url: "https://gmlogistics-cd.com/images/logo3.png",
              width: 1920,
              height: 1080,
              alt: "logo",
            },
          ],

          siteName: "GM logistics",
        }}
      
      
      />

      <NavbarTwo />
      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg4"
      />
      <ContactFormContent />
      <Footer />
    </>
  );
};

export default Contact;
