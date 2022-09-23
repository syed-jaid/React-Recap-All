import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Reuseabale-components/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className='App-main-div'>
      <div className='mx-6'>
        <Navbar />
        <Home></Home>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
