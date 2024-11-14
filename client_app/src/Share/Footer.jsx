import React from "react";
import PropTypes from "prop-types";
import Global from "../Image/Global";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      {/* <div className="footer-static-top">
                <div className="container">
                    <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={Global.Footer1} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Free Delivery</h2>
                                        <p>And free returns. See checkout for delivery dates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={Global.Footer2} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Safe Payment</h2>
                                        <p>Pay with the world's most popular and secure payment methods.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={Global.Footer3} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Shop with Confidence</h2>
                                        <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={Global.Footer4} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>24/7 Help Center</h2>
                                        <p>Have a question? Call a Specialist or chat online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="footer-static-middle">
        <div className="container">
          <div className="footer-logo-wrap pt-50 pb-35">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                  <img
                    src={Global.Logo}
                    style={{ width: "20rem" }}
                    alt="Footer Logo"
                  />
                  <p className="info">
                    Designers and developers that create high
                    quality HTML Template & Woocommerce, Shopify Theme.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Product</h3>
                  <ul>
                    <li>
                      <Link to={"/shop/all"}>All product</Link>
                    </li>
                    <li>
                      <Link to={"/shop/60615da34c9cac0448b4b9a3"}>Pant</Link>
                    </li>
                    <li>
                      <Link to={"/shop/60615da34c9cac0448b4b9a4"}>Watch</Link>
                    </li>
                    <li>
                      <Link to={"/shop/60615da34c9cac0448b4b9a5"}>Sneaker</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">About us</h3>
                  <ul className="des">
                    <li>
                      <span>Address: </span>
                      Hust
                    </li>
                    <li>
                      <span>Phone: </span>
                      <a href="#">012345678</a>
                    </li>
                    <li>
                      <span>Email: </span>
                      <a href="mailto://hust">hust</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
