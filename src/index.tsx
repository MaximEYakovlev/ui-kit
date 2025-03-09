import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';

const App = () => {
  return <h1>Hello UI Kit!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
