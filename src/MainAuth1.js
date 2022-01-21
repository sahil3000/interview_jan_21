import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Files/Layout/Layout';
import UserProfile from './Files/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { AuthContextProvider } from './store/auth-context';

function MainAuth1() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
            
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default MainAuth1;
