import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import { init, loadRemote } from "@module-federation/runtime";

init({
  name: "RemoteApp",
  remotes: [
    {
      name: "RemoteApp",
      entry: "http://localhost:3001/remoteEntry.js",
    },
  ],
});

function useDynamicImport({ module, scope }) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (!module || !scope) return;

    const loadComponent = async () => {
      try {
        const { default: Component } = await loadRemote(`${scope}/${module}`);
        setComponent(() => Component);
      } catch (error) {
        console.error(`Error loading remote module ${scope}/${module}:`, error);
      }
    };

    loadComponent();
  }, [module, scope]);

  return component;
}

function App() {
  const [{ module, scope }, setSystem] = useState({});

  const setApp = () => {
    setSystem({
      scope: "RemoteApp",
      module: "App",
    });
  };

  const Component = useDynamicImport({ module, scope });

  return (
    <div className="App">
      <button onClick={setApp}>Load App 2 Widget</button>
      <Suspense fallback="Loading System">
        {Component ? <Component /> : null}
      </Suspense>
    </div>
  );
}

export default App;
