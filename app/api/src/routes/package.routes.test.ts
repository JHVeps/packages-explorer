import request from "supertest";
import fs from "fs";
import app from "../../src/app";
import { Package } from "../types";

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

describe("Packages routes", () => {
  test("Get all packages", async () => {
    const res = await request(app).get("/api/packages");
    expect(res.body).toEqual({
      msg: "Package data from status.example ",
      packages,
    });
  });
});
