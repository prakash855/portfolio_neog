import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { routes } from "./constants";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routes.map(({ path, component, exact }, index) => (
          <Route
            key={index}
            path={path}
            component={component}
            exact={exact || false}
          />
        ))}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
