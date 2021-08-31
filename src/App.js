import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Pages/About/About';
import { Switch, Route } from "react-router-dom";
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import MyBlogs from './Pages/Blogs/MyBlogs';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/test" component={MyBlogs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
