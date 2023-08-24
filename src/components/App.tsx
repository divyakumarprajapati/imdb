import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import InitialPage from "./pages/InitialPage";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/details" element={<DetailsPage />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
