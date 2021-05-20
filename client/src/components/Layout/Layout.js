import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
