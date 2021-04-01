import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Content from './components/content/content';
import Statecontain from './components/state/State';

const Home = () => (
  <div className="site">

    <Banner />
    <Content types="Home" />

  </div>

);

const News = () => (
  <div className="news">
    <Banner />
    <Content types="News" />
  </div>
);

const Contact = () => (
  <div className="contact">
    <Banner />
    <Content types="Contact" />
  </div>
);

const About = () => (
  <div className="about">

    <Banner />
    <Content types="About" />
  </div>
);

const State = () => (
  <div className="state">
    <Statecontain />
  </div>
);

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/state" component={State} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
