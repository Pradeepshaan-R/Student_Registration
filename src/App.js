import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CreateForm from "./Components/CreateForm";
import Home from "./Components/Home";
import AdminDash from "./Components/AdminDash";
import Login from "./Components/Login";
import UseToken from "./Components/UseToken";

function App() {
  const { token, setToken } = UseToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/create">
        <CreateForm />
      </Route>
      <Route path="/admin">
        <AdminDash />
      </Route>
    </Router>
  );
}

export default App;
