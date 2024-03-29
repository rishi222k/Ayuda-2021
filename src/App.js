import Home from "./Pages/Home";
import {Switch,Route } from 'react-router-dom'
import BoardP from "./Pages/BoardP";
import GalleryP from "./Pages/GalleryP";
import ScrollTop from './ScrollTop'

function App() {
  return (
    <div className="App">
      
    <ScrollTop/>
    <Switch>

      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/boards">
        <BoardP/>
      </Route>

      <Route path="/gallery">
        <GalleryP/>
      </Route>
      
    </Switch>
    </div>
  );
}

export default App;
