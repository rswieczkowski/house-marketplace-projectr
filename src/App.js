import { BrowserRouter as Rlouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import ForgotPasword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Rlouter>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<SignIn />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPasword />} />
        </Routes>
        <Navbar />
      </Rlouter>
    </>
  );
}

export default App;
