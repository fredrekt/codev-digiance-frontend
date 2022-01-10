import './App.css';
import {Routes as Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import AccountPage from './pages/Account';
import ProtectedRoute from './auth/protected-route';

function App() {
  return (
    <ProtectedRoute>
      <Switch>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/account' element={<AccountPage/>}/>
      </Switch>
    </ProtectedRoute>
  );
}

export default App;
