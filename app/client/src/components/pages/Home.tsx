import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAllPackagesThunk } from "../../services/package-service";
import NotFound from "../notifications/NotFound";
import Headline from "../headline/Headline";
import { Link } from "react-router-dom";

import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const { packages } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getAllPackagesThunk());
  }, [dispatch]);

  if (packages.isLoading) {
    return <NotFound notification={{ message: "Loading..." }} />;
  }
  if (packages.error) {
    return <NotFound notification={{ message: "Error!" }} />;
  }

  return (
    <div className="home">
      <Box sx={{ width: "100%" }}>
        <AppBar sx={{ backgroundColor: "#282828" }} position="static">
          <Toolbar>
            <Headline
              headline={{
                text: "Packages from status.example",
              }}
            />
          </Toolbar>
        </AppBar>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer sx={{ backgroundColor: "#111" }}>
            <Table sx={{ minWidth: 750 }} size={"medium"}>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#111",
                    borderBottom: "2px solid #363433",
                  }}
                >
                  <TableCell
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                      color: "#fff",
                    }}
                  >
                    Package name
                  </TableCell>
                  <TableCell
                    sx={{
                      borderRight: "2px solid #363433",
                      fontSize: "1.5rem",
                      color: "#fff",
                    }}
                  >
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {packages.items.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: "#111",
                      borderBottom: "2px solid #363433",
                    }}
                  >
                    <TableCell
                      scope="row"
                      sx={{
                        borderRight: "2px solid #363433",
                        fontSize: "1.3rem",
                        color: "#fff",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                        to={`/${item.name}`}
                      >
                        {item.name}
                      </Link>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "2px solid #363433",
                        fontSize: "1.3rem",
                        color: "#fff",
                      }}
                    >
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default Home;
