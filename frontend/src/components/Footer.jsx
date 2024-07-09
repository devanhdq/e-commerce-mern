import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <FaPaperPlane className="text-white" size={30} />
                <p className="text-white mb-0">
                  Subscribe to our newsletter and get the latest updates
                </p>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email address..."
                  aria-label="Enter your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="d-flex flex-column justify-content-center">
                <address className="text-white gap-1">
                  123 Main Street, Anytown, USA 12345 Zip Code: 12345
                </address>
               
                <a className="text-white" href="tel:+1234567">
                  1234567
                </a>
               
                <a className="text-white" href="mailto:mail@gmail.com">
                  gmail@gmail.com
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 ">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white p-1">Private Policy</Link>
                <Link className="text-white p-1">Refund Policy</Link>
                <Link className="text-white p-1">Shipping Policy</Link>
                <Link className="text-white p-1">Term of Service</Link>
                <Link className="text-white p-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 ">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white p-1">About Us</Link>
                <Link className="text-white p-1">Faq</Link>
                <Link className="text-white p-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4 ">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white p-1">Laptops</Link>
                <Link className="text-white p-1">Headphones</Link>
                <Link className="text-white p-1">Tablets</Link>
                <Link className="text-white p-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
