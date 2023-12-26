import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-danger bg-body-tertiary text-info">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  SPAGHETTI-WORLD
                </h6>
                <p>Our pasta is everybody's favorite! · We sell the pasta!</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <NavLink className="text-uppercase fw-bold mb-4" to="/product-list">
              OUR PRODUCTS
            </NavLink>               
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <NavLink className="text-uppercase fw-bold mb-4" to="/product-list">
              ORDER
            </NavLink>
               
                
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">CONTACT</h6>

                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright
        </div>
      </footer>
    </>
  );
};

export default Footer;
