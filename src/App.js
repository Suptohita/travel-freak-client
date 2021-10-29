import Home from './components/Home/Main/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <PrivateRoute path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
    
          <Route path='/login'>
            <Login></Login>
          </Route>


        </Switch>
    </Router>
    </AuthProvider>
      

  );
}

export default App;
