import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAllPackagesThunk } from "../../services/package-service";
import NotFound from "../notifications/NotFound";
import { PackageInfo } from "../../types";
import { Typography } from "@mui/material";
import { removeVersionInfo, removeWhiteSpaces } from "../../utils/utlis";
import DependencyLink from "../dependencies/DependencyLink";
import DependencyTextOnly from "../dependencies/DependencyTextOnly";
import BackToHomeButton from "../buttons/BackToHomeButton";

import "./PackageDetails.css";

const PackageDetails = () => {
  const { package_name } = useParams<{ package_name: string }>();
  const { packages } = useSelector((state: RootState) => state);
  const packageData = useSelector(
    (state: RootState) =>
      state.packages.items.find((p) => p.name === package_name) as PackageInfo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackagesThunk());
  }, [dispatch]);

  if (packageData === undefined) {
    return <NotFound notification={{ message: package_name }} />;
  }

  const dependsData = packageData.depends.split(/[,|]/);

  function isPackageName(p: string) {
    let result = false;

    packages.items.forEach((item) => {
      if (p === item.name) {
        result = true;

        return;
      }
    });
    return result;
  }

  return (
    <div className="package_details">
      <div className="form">
        <Typography variant="h3">{packageData.name}</Typography>
        <Typography variant="h5">Description</Typography>
        <textarea
          name="description"
          value={packageData.description}
          readOnly
        ></textarea>
        <Typography variant="h5">Depends</Typography>

        {dependsData.map((item: string) => {
          if (isPackageName(removeWhiteSpaces(removeVersionInfo(item))))
            return <DependencyLink dependency={{ item: item }} key={item} />;

          return <DependencyTextOnly dependency={{ item: item }} key={item} />;
        })}

        <BackToHomeButton />
      </div>
    </div>
  );
};

export default PackageDetails;
