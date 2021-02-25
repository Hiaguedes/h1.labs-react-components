const theme = {
  light: {
    background: "#f1f1f1",
    sidebarBackground: "#d9dddc",
    linkColor: "#000",
    textDefaultColor: "#000",
  },
  dark: {
    background: "#1c1c1c",
    sidebarBackground: "#303030",
    linkColor: "#fff",
    textDefaultColor: "#fff",
  },
};

type Colors = typeof theme.light;
interface Theme {
  light: Colors;
  dark: Colors;
} 
export { Theme, theme, Colors };
