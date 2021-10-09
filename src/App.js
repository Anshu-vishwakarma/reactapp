
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Main from './component/Main';
import CheckOut from './component/CheckOut';
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
        <Switch>
          <Route exact path="/live" component={Home} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </BrowserRouter>
     </div>
    
  );
}

export default App;
