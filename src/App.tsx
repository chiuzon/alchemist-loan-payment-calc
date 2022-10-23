import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import Layout from "./components/Layout";
import Home from "./views/Home";

const App: Component = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Layout>
  );
};

export default App;
