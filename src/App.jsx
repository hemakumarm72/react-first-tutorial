import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Home/navbar/navbar';
import Sidebar from './components/Home/banner/banner';
import Content from './components/Home/content/content';

const Home = () => (
  <div className="site">
    <Navbar />
    <Sidebar />
    <Content />
  </div>

);

const News = () => (
  <div>
    <p>Hey i am read news</p>
  </div>
);
function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/News" component={News} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
