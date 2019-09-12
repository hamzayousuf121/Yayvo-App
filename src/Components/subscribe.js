import React from "react";
import "../index.css";
import { Button } from "reactstrap";
export default function Subscriber() {
  return (
    <div className="subscribe1">
      <h4 className="text-center"> Subscribe for News & Updates</h4>
      <br />
      <tr>
        <td className="subscribePadding pl-5">
          <input
            className="subscriber-input"
            type="email"
            required="required"
            maxLength="50"
            minLength="8"
            placeholder="Enter Email"
          />
        </td>
        <td className="subscribePadding">
          <input
            className="subscriber-input"
            type="email"
            required="required"
            maxLength="50"
            minLength="8"
            placeholder="Enter Name"
          />
        </td>
        <td className="pr-3 lastInp">
          <input
            type="email"
            className="lastInp subscriber-input"
            required="required"
            maxLength="50"
            minLength="8"
            placeholder="Enter phone"
          />
        </td>
      </tr>
      <Button className="subscribe-btn" color="danger">
        Subscribe
      </Button>{" "}
    </div>
  );
}
