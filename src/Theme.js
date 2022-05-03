import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17215E",
    },
    secondary: {
      main: "#545454",
    },
    comingsoon: {
      main: "#7b1c1c",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      comingsoon: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Sans-serif",
    body1: {
      fontSize: 24,
      fontWeight: "bolder",
    },
    body2: {
      fontFamily: "Sans-serif",
      fontSize: 16,
    },
    body3: {
      fontSize: 12,
      fontWeight: "bolder",
      textDecoration: "underline",
    },
    body4: {
      fontSize: 32,
      fontWeight: "bolder",
      color: "#00CC00",
    },
    body5: {
      fontSize: 28,
    },
    body6: {
      fontSize: 12,
      fontWeight: "bolder",
    },
    body7: {
      fontSize: 14,
      fontWeight: "bolder",
    },
    body8: {
      fontSize: 15,
      fontWeight: "bolder",
    },
    allVariants: {
      color: "#000000",
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: "bolder",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "6px 6px 20px 6px #00000096",
          borderRadius: 8,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
          paddingRight: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "bolder",
          fontSize: "14px",
          padding: "5px",
        },
        contained: {
          boxShadow: "3px 3px 5px 3px #00000096",
        },
        containedSecondary: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
