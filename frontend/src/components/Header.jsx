import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import {
  FaCodeCompare,
  FaHeart,
  FaRegUser,
  FaCartFlatbed,
} from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping for standard order over $100 & Free return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+84888888">
                  0122-122-123
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">E-Commerce</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6you" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <FaCodeCompare size={30} />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <FaHeart size={30} />
                    <p className="mb-0">
                      Favorite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <FaRegUser size={30} />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>

                <div>
                  <Link className="text-white d-flex align-items-center gap-2">
                    <FaCartFlatbed size={40} className="cart-icon" />
                    <div className="d-flex flex-column gap-2">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex justify-content-center align-items-center gap-10"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <CgMenuGridR size={30} />
                     <span className="me-5 d-inline-block">
                     Shop Categories
                     </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to={"/"}>
                          Another action
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-5">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/store">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blog">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
