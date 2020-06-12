import React, {useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "semantic-ui-react";
import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import NoMatch from "./components/NoMatch";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Protein Drinks", body: "Carmel or bust, peach sucks!" },
    {
      id: 2,
      title: "Smart Phones",
      body: "Does anyone not have an iPhone in 2020?",
    },
    { id: 3, title: "Boating", body: "Who even paddleboats?" },
  ]);

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={(props) => <Home setPosts={setPosts} posts={posts} {...props} />} />
          <Route exact path="/ContactUs" render={(props) => <ContactUs {...props} />} />
          <Route exact path="/Posts" render={(props) => <Posts {...props} setPosts={setPosts} posts={posts} />} />
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </Container>
    </>
  );
}

export default App
