import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
});

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
