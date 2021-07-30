import React from 'react';
import { render } from "react-dom";
import SubscribePage from './components/SubscribePage/SubscribePage';
import './style.css';

const container = document.getElementById("app");
render(<SubscribePage />, container);