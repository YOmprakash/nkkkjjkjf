import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
