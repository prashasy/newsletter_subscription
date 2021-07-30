import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import { AdminPage } from './Components/AdminPage';
import SubscribePage from './components/SubscribePage/SubscribePage';
import './style.css';

function App() {
    return (
        <BrowserRouter>
            <Route path='/admin' render={() => (<AdminPage />)} />
            <Route
                exact
                path="/"
                render={() => (
                    <SubscribePage />
                )}
            />
        </BrowserRouter>
    );
}


const container = document.getElementById("app");
render(<App />, container);