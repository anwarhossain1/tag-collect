import './App.css';
import Country from './cmp/country';
import Text from './cmp/TextSearch';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>

    <Switch>
      <Route exact path="/"    component={Text}/>
      <Route path="/as"  component={Country}/>
    </Switch>
    </Router>
   
    </>
    
   
  );
}

export default App;
