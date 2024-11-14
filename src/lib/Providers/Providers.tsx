/* It's just a wrapper for material ui 
Why this wrapper ? because it will use in client (may be)*/
// Layout is a server component & this wrapper is a client component , can't directly use

"use client";
/* Beacause of it will use in client */
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
