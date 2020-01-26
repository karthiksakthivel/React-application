import React from "react";
import App from './App';
import Table from './table';
const routes = {
  "/": () => <App />,
  "/DashBoard": () => <Table />,
};

export default routes;