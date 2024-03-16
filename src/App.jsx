import { useRoutes } from "react-router-dom";
import Routes from "./routes/Routes";


function App() {
  const element = useRoutes(Routes);
  return <>{element}</>;
}

export default App;
