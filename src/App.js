import Home from './components/Home/Main/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllDestination from './components/AllDestination/AllDestination';
import AddDestination from './components/AddDestination/AddDestination';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

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

          <Route path='/allDestination'>
            <AllDestination></AllDestination>
          </Route>

          <PrivateRoute path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path='/manageAllOrders'>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>

          <PrivateRoute path='/addDestination'>
            <AddDestination></AddDestination>
          </PrivateRoute>

          <Route path='/about'>
            <About></About>
          </Route>
    
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/placeOrder/:destinationId'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
    </AuthProvider>
      

  );
}

export default App;
