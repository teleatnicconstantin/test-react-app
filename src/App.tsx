import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/app/store";
import AppNavigation from "./AppNavigation";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
