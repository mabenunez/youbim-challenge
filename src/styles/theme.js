import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  red: "rgb(239, 56, 41)",
  lightRed: "rgb(242, 222, 222)",
  error: "rgb(183, 32, 46)",
  grey: "rgb(133, 133, 133)",
  bgGrey: "rgb(238, 238, 238)",
  ligthGrey: "rgba(250, 250, 250, 0.3)",
  ligtherGrey: "rgb(238, 238, 238)",
};

export const theme = createMuiTheme({
  palette: {
    secondary: {
      light: "rgb(255, 121, 97)",
      main: "rgb(244, 67, 54)",
      dark: "rgb(186, 0, 13)",
      contrastText: "rgb(255, 255, 255)",
    },
    primary: {
      light: "rgb(96, 200, 224)",
      main: "rgb(24, 144, 255)",
      dark: "rgb(23, 123, 217)",
      contrastText: "rgb(255, 255, 255)",
    },
  },

  overrides: {
    MuiFormControl: {
      marginDense: {
        marginBottom: "18px",
      },
    },
    MuiInputLabel: {
      // change the color of the label of inputs on focus
      root: {
        "&$focused": {
          color: `${colors.grey} !important`,
        },
      },
    },
    MuiInput: {
      // IE style fixes
      root: {
        overflow: "hidden",
      },
      input: {
        "&::-ms-clear": {
          display: "none",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});
