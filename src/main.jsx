import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Layout } from './components';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Flutter,MappingRobot,HomePage} from "./project_pages"
import { Home } from "./sections";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Layout>
    <App/>
    </Layout>
  
);