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
        <meta property="og:url" content="https://saas4devs.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SaaS4Devs" />
        <meta
          property="og:description"
          content="An awesome collection of content for developers trying to bootstrap
            their SaaS business. Free & Open source from day one."
        />
        <meta property="og:image" content={require("@assets/saas4devs.png")} />
      </Helmet>
      {/* Add React.Suspense support */}
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
