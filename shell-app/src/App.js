import React, { Suspense } from "react";
import "./App.css";

const RemoteApp = React.lazy(() => import("RemoteApp/App"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
