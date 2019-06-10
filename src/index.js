import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// router: https://reach.tech/router
import { globalHistory, Router } from "@reach/router";
// use params hooks: https://github.com/pbeshai/use-query-params
import { QueryParamProvider } from "use-query-params";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <QueryParamProvider reachHistory={globalHistory}>
    <Router>
      <App default />
    </Router>
  </QueryParamProvider>,
  document.getElementById("root")
);

serviceWorker.register();
