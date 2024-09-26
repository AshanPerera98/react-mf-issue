import React, { Component, Suspense } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import storeConfigs from "./redux/store/Store";
import configActions from "./redux/action/configAction";

const Button = React.lazy(() => import("SupportApp/Button"));

class App extends Component {
  constructor(props) {
    super(props);

    storeConfigs.store.dispatch(
      configActions.setAppConfigs({ app_initialized: true })
    );
  }

  render() {
    return (
      <Provider store={storeConfigs.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Below button is coming from support-app remote.</p>
            <Suspense fallback={"loading..."}>
              <Button label={"This Button is rendering as a remote"} />
            </Suspense>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
