import { NotifyContainer } from "@utils/notify";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedApp from "routes/AuthenticatedApp";
import UnauthenticatedApp from "routes/UnauthenticatedApp";

function App() {
  const token = false;

  return (
    <BrowserRouter>
      <NotifyContainer />
      {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </BrowserRouter>
  );
}

export default App;
