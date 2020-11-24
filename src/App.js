import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@src/Routes";

// Context
import { Provider } from "@context/global";
import reducer, { initialState } from "@context/reducer";

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <>
        {" "}
        {/* Add React.Suspense support */}
        <Router>
          <Routes />
        </Router>
      </>
    </Provider>
  );
}

export default App;
