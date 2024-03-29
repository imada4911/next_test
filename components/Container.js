import React from "react";
import Container from "@mui/material/Container";

const Containers = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default Containers;
