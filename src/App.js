import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
