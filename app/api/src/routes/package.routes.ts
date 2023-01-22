import express from "express";
import { Package } from "../types";
import fs from "fs";

const router = express.Router();

let packages: Package[] = [];

if (packages.length <= 0) {
  const data = fs.readFileSync("./data/status.example", {
    encoding: "utf8",
    flag: "r",
  });

  const splitLines = data.split("\n\n");

  splitLines.forEach((line) => {
    const keyName = line.match(/Package\:\ (.*?)\n/);
    const keyDescription = line.match(/Description\:\ (.*?)\n/);
    const keyDepends = line.match(/Depends\:\ (.*?)\n/);

    if (keyName && keyDescription && keyDepends) {
      const name = keyName[1];
      const description = keyDescription[1];
      const depends = keyDepends[1];

      const packageObject: Package = { name, description, depends };

      packages.push(packageObject);
    }
  });
}

router.get("/", (_req, res) => {
  if (packages.length <= 0) {
    res.json({
      msg: "Packages not found",
      packages: null,
    });
    return;
  }
  console.log("All packages fetched");
  res.json({
    msg: "Package data from status.example ",
    packages,
  });
});

export { router };
