import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Profile from './components/Profile'
import EnhancedTable from "./Utils/EnhancedTable";
import Table from "./Utils/Table";

import { StateProvider } from "./StateProvider";

function App() {
  return (
    <StateProvider>
      <div className="app">
        <Sidebar />
        {/* Home */}
        <div className="home">
          <Table />
          {/* <EnhancedTable /> */}
          <Profile />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
