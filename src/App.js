import './App.css';
import {Routes as Switch, Route } from 'react-router-dom';
import AccountPage from './pages/Account';
import ProtectedRoute from './auth/protected-route';
import ChangePassword from './pages/ChangePassword';

function App() {
  return (
    <ProtectedRoute>
      <Switch>
        <Route exact path='/' element={<AccountPage/>}/>
        <Route path="/change-password" element={<ChangePassword/>}/>
      </Switch>
    </ProtectedRoute>
  );
}

export default App;
