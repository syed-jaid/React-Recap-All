import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
function App() {
  return (
    <div className='App-main-div mb-6'>
      <div className='mx-2 sm:mx-6'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
