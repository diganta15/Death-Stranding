import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Display from './Display';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route exact path="/" component={Display} />
          <Route exact path="/detail/:id" component={Detail} />
     </Switch>
   </Router>
    </div>
  );
}

export default App;
