import React from "react";
import { Link } from "react-router-dom";
//
import main_banner from "../assets/images/main-banner.jpg";
import small_banner_1 from "../assets/images/catbanner-01.jpg";
import small_banner_2 from "../assets/images/catbanner-02.jpg";
import small_banner_3 from "../assets/images/catbanner-03.jpg";
import small_banner_4 from "../assets/images/catbanner-04.jpg";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={main_banner}
                  alt="Main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Significant others.</h4>
                  <h5>iPhone and Mac</h5>
                  <p>
                    You can answer calls or messages from your iPhone directly
                    on your Mac.
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={small_banner_1}
                    alt="Main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Significant others.</h4>
                    <h5>iPhone and Mac</h5>
                    <p>
                      You can answer calls or messages
                    </p>
                    <Link className="small-button">Buy Now</Link>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src={small_banner_2}
                    alt="Main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Significant others.</h4>
                    <h5>iPhone and Mac</h5>
                    <p>
                      You can answer calls or messages
                    </p>
                    <Link className="small-button">Buy Now</Link>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src={small_banner_3}
                    alt="Main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Significant others.</h4>
                    <h5>iPhone and Mac</h5>
                    <p>
                      You can answer calls or messages
                    </p>
                    <Link className="small-button">Buy Now</Link>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={small_banner_4}
                    alt="Main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Significant others.</h4>
                    <h5>iPhone and Mac</h5>
                    <p>
                      You can answer calls or messages
                    </p>
                    <Link className="small-button">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
