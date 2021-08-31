import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "components/NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { ItemProvider } from "providers/ItemProvider";
import { theme } from "styles/theme";
import { BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "rgba(240, 242, 245, 1)",
    height: "100vh",
  },
  paper: {
    margin: "20px",
    padding: "20px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <ItemProvider>
        <div className={classes.background}>
          <NavBar></NavBar>
        </div>
      </ItemProvider>
    </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
