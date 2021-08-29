import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Pages/About/About';
import { Switch, Route } from "react-router-dom";
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
