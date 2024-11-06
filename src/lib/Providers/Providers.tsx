/* It's just a wrapper for material ui 
Why this wrapper ? because it will use in client (may be)*/

"use client";
/* Beacause of it will use in client */
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
