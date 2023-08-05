import { ThemeProvider } from "@emotion/react"
import { customTheme } from "./themeConfig"
import Layout from "./layout/Layout"


function App() {
  

  return (
      <ThemeProvider theme={customTheme}>
        <Layout />
      </ThemeProvider>
  )
}

export default App
