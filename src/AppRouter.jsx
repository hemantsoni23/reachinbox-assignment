import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OneBoxPage from './pages/OneBoxPage';
// import Home from './components/Home';
// import Inbox from './components/Inbox';
import PrivateRoute from './components/PrivateRoute';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <OneBoxPage />
            </PrivateRoute>
          }
        >
          {/* Nested Routes */}
          {/* <Route path="home" element={<Home />} />
          <Route path="inbox" element={<Inbox />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
