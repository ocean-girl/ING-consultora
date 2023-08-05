import { ThemeProvider } from "@emotion/react"
import { customTheme } from "./themeConfig"


function App() {
  

  return (
      <ThemeProvider theme={customTheme}>
        <h1>
          App
        </h1>
      </ThemeProvider>
  )
}

export default App
