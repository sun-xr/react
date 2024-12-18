import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  theme: "light",
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
