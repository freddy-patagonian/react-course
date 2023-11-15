import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
      </main>
    </div>
  );
}

export default App;
