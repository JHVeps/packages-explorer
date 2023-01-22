import React from "react";
import { NotFoundNotificationProps } from "../../types";
import { Typography } from "@mui/material";
import { removeVersionInfo, removeWhiteSpaces } from "../../utils/utlis";
import BackToHomeButton from "../buttons/BackToHomeButton";

const NotFound = ({ notification }: NotFoundNotificationProps) => {
  if (notification.message === undefined) {
    return <>undefined</>;
  }
  return (
    <div className="notification_Notfound">
      <Typography variant="h4">{`${removeWhiteSpaces(
        removeVersionInfo(notification.message)
      )} Not found`}</Typography>
      <BackToHomeButton />
    </div>
  );
};

export default NotFound;
