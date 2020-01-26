import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from "hookrouter";
import routes from "./routes";
import 'antd/dist/antd.css';

function Application() {
    const routeResult = useRoutes(routes);
    return routeResult;
  }
  
ReactDOM.render(
    <Provider store={configureStore()}>
        <Application />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
