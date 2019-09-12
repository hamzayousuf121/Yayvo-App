import React from "react";

export default function Mainfooter() {
  return (
    <div className="footer_static_bottom footerEnd">
      <div className="footer_static_bottom_one">
        <div className="fpartneroption">
          <h2>Partner Websites</h2>
          <div className="footer-partner-logo">
            <a href="https://www.studiobytcs.com/">
              <i className="icon1">studio</i>
            </a>
            <a href="http://www.tcscouriers.com/">
              <i className="icon2">tcs</i>
            </a>
            <a href="http://www.sentimentsexpress.com">
              <i className="icon3">sentiment</i>
            </a>
          </div>
        </div>

        <div className="fpaymentoption">
          <h2>Payment Method</h2>
          <div className="footer-partner-logo">
            <i className="icon1">visa</i>
            <i className="icon2">mastercard</i>
            <i className="icon3">jazzcash</i>
            <i className="icon4">easypaisa</i>
            <i className="icon5">cod</i>
            <i className="icon6">alfalah</i>
            <i className="icon7">keenu</i>
          </div>
        </div>

        <div className="fsocialoption">
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/dashinghaa/">
                <i className="one"></i>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com">
                <i className="three"></i>
              </a>
            </li>
            <li>
              <a href="https://www.snapchat.com">
                <i className="four"></i>
              </a>
            </li>
            <li>
              <a href="https://webhost112.blogspot.com/">
                <i className="five"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hamzayousuf121/">
                <i className="footer-icon-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_bottom_logo">
          <a href="#">
            <img src="http://yayvo.com/skin/frontend/default/yayvo_new/images/yayvo_logo.png" />
          </a>
          <br />
          <span> © 2019, Hamza Yousuf </span>
        </div>
      </div>
    </div>
  );
}
