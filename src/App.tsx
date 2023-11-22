import { Stack } from "@mui/material";
import "./App.css";
import Profile from "./profile";
import Repositories from "./repositories";

function App() {
  return (
    <Stack
      border="1px solid #c6c6c6"
      padding="24px"
      borderRadius="10px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Profile />
      <Repositories />
    </Stack>
  );
}

export default App;
