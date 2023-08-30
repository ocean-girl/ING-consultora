import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
//import Layout from "./components/layout/Layout"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
