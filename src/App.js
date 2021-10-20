import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AllPosts from "./components/AllPosts/AllPosts";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <Router>
      <Toaster />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/all-posts" component={AllPosts} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
