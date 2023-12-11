import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "next/app";
import Head from "next/head";
import React from "react";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import { NextSeo } from "next-seo";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            type={"application/ld+json"}
            key={"structured-data"}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Cabinet",
                name: "GM Logistics",
                alternateName: "GM Logistics",
                url: "https://gmlogistics-cd.com/",
                logo: "https://gmlogistics-cd.com/images/logo3.png",
                priceRange: "$$",
                description:
                  " GM Logistics is a supply chain company based in DRC Kinshasa, Lubumbashi, and Kolwezi.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "CD",
                  addressLocality: "Kinshasa",
                  addressRegion: "Gombe",
                  postalCode: "01012",
                  streetAddress: "14 Av. De la Justice ",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+243890008505",
                  contactType: "sales",
                  areaServed: "CD",
                  availableLanguage: ["en", "fr", "Lingala"],
                },
                telephone: "+243890008505",
                photo: "https://gmlogistics-cd.com/images/logo3.png",
                slogan: "",
                keywords:
                  "GM Logistics, We are the leader trainers of Microsoft 365 in Kinshasa, Lubumbashi, and Kolwezi.",
                email: "contact@gmlogistics-cd.com",
                brand: "GM Logistics",
                sameAs: [
                  "https://gmlogistics-cd.com/",
              
                ],
                openingHours: "Mo,Tu,We,Th,Fr, 08:00-16:00",
              }),
            }}
          />
        </Head>
        <NextSeo
          title="GM Logistics - Homepage"
          description=" Welcome to the GM Logistics's Homepage."
          canonical="https://gmlogistics-cd.com/"
          openGraph={{
            url: "https://gmlogistics-cd.com",
            title: "GM Logistics - Homepage",
            description:
              "Welcome to the GM Logistics's Homepage. We are an IT consulting and Supply chain firm based in the DRC with offices in Kinshasa, Lubumbashi, and Kolwezi.",
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

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="10.50" />
      </>
    );
  }
}
