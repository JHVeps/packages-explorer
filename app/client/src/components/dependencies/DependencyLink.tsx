import React from "react";
import { DependencyProps } from "../../types";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { removeVersionInfo, removeWhiteSpaces } from "../../utils/utlis";

const DependencyLink = ({ dependency }: DependencyProps) => {
  return (
    <Typography variant="h6">
      <Link
        style={{
          textDecoration: "none",
          color: "#fff",
        }}
        to={`/${removeWhiteSpaces(removeVersionInfo(dependency.item))}`}
      >
        {removeWhiteSpaces(removeVersionInfo(dependency.item))}
      </Link>
    </Typography>
  );
};

export default DependencyLink;
