import { ThemeProvider } from "@emotion/react"
import { customTheme } from "./themeConfig"
import Layout from "./components/layout/Layout"


function App() {
  

  return (
      <ThemeProvider theme={customTheme}>
        <Layout />
      </ThemeProvider>
  )
}

export default App
