import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

interface Props {
  children: React.ReactNode;

}

const AppThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
