import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from "./components/Home"
import { Container } from 'semantic-ui-react'
import ContactUs from "./components/ContactUs"
import NavBar from "./components/NavBar"
import Posts from "./components/Posts"
import NoMatch from "./components/NoMatch"

function App() {
  return (
  <>
      <NavBar />
      <Container>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/Posts" component={Posts} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
  </>
  );
}

export default App;