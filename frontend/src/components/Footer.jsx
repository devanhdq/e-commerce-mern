import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">

              </div>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3"></div>
      <hr />
      <div className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
