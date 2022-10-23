import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import Layout from "./components/Layout";
import Home from "./views/Home";
import LRC from "./views/LRC";

const App: Component = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/lrc" component={LRC} />
      </Routes>
    </Layout>
  );
};

export default App;
