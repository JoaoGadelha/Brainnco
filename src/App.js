import './App.css';
import ReposSearchBar from './Components/ReposSearchBar/ReposSearchBar'
import ReposSearchResult from './Components/ReposSearchResult/ReposSearchResult'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import { Context } from './Context'
import Loading from './Components/Loading/Loading'
import {  useContext } from 'react'


function App() {

  let { loading } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <Header  />
        <Switch>
          {!loading && <Route exact path='/' component={ReposSearchBar} />}
          {loading && <Route exact path='/' component={Loading} />}
          <Route path='/result'>
            <ReposSearchResult  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
