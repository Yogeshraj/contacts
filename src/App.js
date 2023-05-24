import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Profile from './components/Profile'
import Table from "./Utils/Table";

import { StateProvider } from "./StateProvider";

function App() {
  return (
    <StateProvider>
      <div className="app">
        <Sidebar />
        <div className="home">
          <Table />
          <Profile />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
