import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Transition from "./Transition";
import {ThemeProvider} from "@material-ui/core/styles";
import {unstable_createMuiStrictModeTheme} from "@material-ui/core/styles";
const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/2022-portfolio">
        <Transition />
      </Router>
    </ThemeProvider>
  );
}

export default App;
