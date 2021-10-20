import * as React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

import { StaticImage } from "gatsby-plugin-image";

// markup
const AnoutPage = () => {
  return (
    <main>
      <SEO title="About us - Mask Network" />
      <Navbar />
      <div className="md:max-w-7xl w-full mx-auto md:flex hg:min-hg-h-about-content md:min-md-h-about-content my-16 max-sm:my-8 px-8">
        <div className="md:w-1/2 w-full md:py-4 hg:py-16 md:pr-8 flex flex-col md:mb-0 mb-8">
          <p className="hg:text-6xl text-6xl md:text-4xl max-sm:text-3xl font-bold max-w-xs mb-4 md:mb-8">
            About us
          </p>
          <p
            className="hg:text-2xl text-2xl md:text-xl max-sm:text-lg font-semibold max-w-sm mb-4 md:mb-8"
            target="_blank"
            rel="noreferrer"
          >
            Mask Network aims to bridge the Web 2.0 users to Web 3.0.
          </p>
          <p className="hg:text-xl text-xl md:text-base max-sm:text-sm text-gray-400 max-w-lg">
            By bringing the amazing decentralized application ecosystem onto
            traditional social networks, the Mask extension provides a
            decentralized option for features Web 2.0 users are familiar with.
            Users could enjoy secure, decentralized social messaging, payment
            networks, file storage, and file sharing without leaving the
            mainstream social media networks. Users could get a glimpse of the
            magic of the Web 3.0 world in an easy and effortless way.We at Mask
            Network are strong believers in the ownership economy. People should
            own what they produce, their data, their attention, and the virtual
            space they choose to contribute to. And we hereby invite everyone
            who sees this message to join us in the course of regaining control
            of our personal data.
          </p>
        </div>
        <StaticImage
          alt=""
          src={"../images/about.png"}
          placeholder="blurred"
          className="md:w-1/2 w-full h-auto md:min-w-about-image noise-img"
        />
      </div>
      <footer className="text-gray-500 text-sm max-sm:text-xs border-t border-gray-200 py-8 px-8 hg:pl-80 md:pl-40">
        I thought what I’d do was, I’d pretend I was one of those deaf-mutes.
      </footer>
      {/* <Footer /> */}
    </main>
  );
};

export default AnoutPage;
