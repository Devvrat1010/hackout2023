import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
// import {} from '@mui/x-data-grid/themeAugmentation';
// const theme = createTheme({
//     components: {
//         MuiDataGrid: {
//           styleOverrides: {
//             root: {
//               backgroundColor: 'red',
//             },
//           },
//         },
//       },
//     typography: {
//         fontFamily: [
//             'Bebas Neue',
//             'Poppins',
//             'sans-serif',
//         ].join(',')},
//     });

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ThemeProvider theme={theme}>
  <App />
  // {/* </ThemeProvider> */}
);
