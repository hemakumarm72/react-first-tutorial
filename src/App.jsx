import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/banner/banner';
import Content from './components/content/content';

const Home = () => (
  <div className="site">
    <Navbar mode="active" />
    <Sidebar />
    <Content />
  </div>

);

const News = () => (
  <div className="news">
    <p>xsd</p>
  </div>
);

const Contact = () => (
  <div className="contact">
    <p>contact section</p>
  </div>
);

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
