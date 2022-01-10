import './App.css';
import {Routes as Switch, Route } from 'react-router-dom';
import AccountPage from './pages/Account';
import ProtectedRoute from './auth/protected-route';

function App() {
  return (
    <ProtectedRoute>
      <Switch>
        <Route exact path='/' element={<AccountPage/>}/>
      </Switch>
    </ProtectedRoute>
  );
}

export default App;
