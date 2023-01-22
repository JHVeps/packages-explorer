import React from "react";
import { DependencyProps } from "../../types";
import { Typography } from "@mui/material";
import { removeVersionInfo, removeWhiteSpaces } from "../../utils/utlis";

const DependencyTextOnly = ({ dependency }: DependencyProps) => {
  return (
    <Typography color="grey" variant="h6">
      {removeWhiteSpaces(removeVersionInfo(dependency.item))}
    </Typography>
  );
};

export default DependencyTextOnly;
