import React from "react";
import { Link } from "react-router-dom";
//
import main_banner from "../assets/images/main-banner.jpg";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content position-relative p-3">
                <img
                  src={main_banner}
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Top Sale</h4>
                  <h5>Ipad Air 6</h5>
                  <p>From $699 or $41.2/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

{/* <div className="d-flex flex-wrap justify-content-between align-items-center">
<div className="small-banner-content position-relative p-3">
  <img
    src={main_banner}
    alt="banner"
    className="img-fluid rounded-3"
  />
  <div className="small-banner-content position-absolute">
    <h4>Top Sale</h4>
    <h5>Ipad Air 6</h5>
    <p>From $699 or $41.2/mo</p>
    <Link className="button">Buy Now</Link>
  </div>
</div>
</div> */}