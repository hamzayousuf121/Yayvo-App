import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class LoginAndSignup extends React.Component {
  state = {
    show: "show1",
    hide:"hide1"
  }
    signupform = ()=> {
      this.setState({
        hide: this.state.show,
        show: this.state.hide
      });
    }
    render() {
      let style = {
        position: "relative",
        width: "143px",
        left: "210px"
      };
    return (
      <div className="subscribe login_container">
        <div className="signin">
          <h3 className="">Sign in</h3>
          <input
            type="email"
            className="signIninp"
            minLength="8"
            maxLength="50"
            required
            placeholder="Enter Your Email"
          />
          <br />
          <input
            type="password"
            className="signIninp"
            minLength="8"
            maxLength="50"
            required
            placeholder="Enter Your Password"
          />
          <br />
          <Button type="submit" style={style} outline color="info">
            Sign In
          </Button>{" "}
        </div>
        <div className="signup">
          <h3>Sign up</h3>
          <h4>I'm new here</h4>
          <p>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <Button outline color="info" id={this.state.show} onClick={this.signupform}>
            CREATE AN ACCCOUNT
          </Button>{" "}
          <div id={this.state.hide}>
          <Form >
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter first Name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastname">Last Name</Label>
                  <Input
                    type="Text"
                    name="lastname"
                    id="lastname"
                    placeholder=" Enter last Name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="number">Phone Number</Label>
              <Input
                type="text"
                name="number"
                id="number"
                placeholder="+92123455528"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="Email"
                name="email"
                id="email"
                placeholder="abc@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="pswd">Password</Label>
              <Input
                type="Email"
                name="pswd"
                id="pswd"
                placeholder="Password"
              />
            </FormGroup>
            <Button outline color="info">
              Sign Up
            </Button>
          </Form>
          </div>
        </div>
      </div>
    );
  }
}
