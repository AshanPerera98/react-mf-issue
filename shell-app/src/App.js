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

function App() {
  const [RemoteApp, setRemoteApp] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const { default: Component } = await loadRemote(`RemoteApp/App`);
        setRemoteApp(() => Component);
      } catch (error) {
        console.error(`Error loading remote module RemoteApp/App:`, error);
      }
    };

    loadComponent();
  });

  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        {RemoteApp ? <RemoteApp /> : null}
      </Suspense>
    </div>
  );
}

export default App;
