import routes from "routes/Routes";
import "./App.css";

import { useRoutes } from "react-router";


function App() {
  const element = useRoutes(routes);
  return <div className="App">{element}</div>;
}

export default App;
