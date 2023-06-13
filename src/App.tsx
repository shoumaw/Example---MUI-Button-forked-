import "./styles.css";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC } from "react";

type AppProps = {
  name: string;
  uppercase: boolean;
  description: string;
  colorMode: "light" | "dark";
  buttonVariant: "contained" | "text" | "outlined";
};

const App: FC<AppProps> = ({
  name,
  uppercase,
  description,
  colorMode = "dark",
  buttonVariant = "contained"
}) => {
  const themeMode = createTheme({
    palette: {
      mode: colorMode
    }
  });

  return (
    <ThemeProvider theme={themeMode}>
      <main>
        <h1>Hello, {name}</h1>
        <p>{uppercase ? description.toUpperCase() : description}</p>
        <Button variant={buttonVariant}>This is the button</Button>
      </main>
    </ThemeProvider>
  );
};

export default App;
