import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@src/Routes";

// Context
import { Provider } from "@context/global";
import reducer, { initialState } from "@context/reducer";

const App = () => {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
