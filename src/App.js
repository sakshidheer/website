import { Route } from 'react-router-dom';
import Author from './components/Author';
import Projects from './components/Projects';
import Home from './components/Home';
import Header from './components/Header/Header';
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.app}>
      <div><Header /></div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </div>
  );
}

export default App;
