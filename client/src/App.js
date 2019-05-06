import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Quiz from './components/GatherInfo/Quiz'
// import SideBar from "./components/RecordPage/SideBar"
import Layout from "./components/RecordPage/Layout"



function App() {
  return (
    <div>
      <Router>
        <div>
          {/* <NavTabs /> */}
          <Route exact path="/" component={Quiz} />
          <Route exact path="/recordpage" component={Layout} />
        </div>
      </Router>
  
    </div>
  );
}

export default App;
