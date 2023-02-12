import React from "react";
import Header from "./../components/Header";
import IMAGE_BANNER from "../asset/The-Reverie-Saigon-Exterior-Daytime-I-1920X1080-1.jpg";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import Footer from "./../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="banner-container">
        <div className="banner__relative">
          <div className="banner-overlay"></div>
          <div className="banner__image">
            <img src={IMAGE_BANNER} alt="banner" />
          </div>
          <div className="banner__text-block">
            <div className="banner__text-block_frame">
              <h2>
                DSCT <br /> BUILDING
              </h2>
            </div>
            <div className="banner__text-block__outside">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              explicabo?
            </div>
          </div>
          <div className="banner__bottom">
            <Link to="/apply">Apply for job</Link>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </>
  );
};

export default HomePage;
