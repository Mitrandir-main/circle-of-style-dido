import {Container} from "@material-ui/core";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <div>
        <h1>About Us</h1>
        <p>We are a company that sells stuff.</p>
        <div>
          <h2>Our Mission</h2>
          <p>
            We are on a mission to sell stuff to people who want to buy stuff.
          </p>
        </div>
        <div>
          <h2>Address</h2>
          <p>1234 Main St</p>
          <p>Anywhere, UK</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
