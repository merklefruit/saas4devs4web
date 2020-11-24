import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@src/Routes";

// Context
import { Provider } from "@context/global";
import reducer, { initialState } from "@context/reducer";

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <Helmet>
        <title>SaaS4Devs</title>
      </Helmet>
      {/* Add React.Suspense support */}
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
