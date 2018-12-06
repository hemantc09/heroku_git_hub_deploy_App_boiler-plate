
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
//import normalize  css to render same style across all browsers
//.e.g. same output on IE, Safari, FF .:. we use normalize.css
import 'normalize.css/normalize.css';
//load the css file
import './styles/styles.scss';

// ReactDOM.render(<p>this is my boiler plate</p>,document.getElementById('app'));
ReactDOM.render(<App />,document.getElementById('app'));
