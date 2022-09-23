import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Reuseabale-components/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className='App-main-div'>
      <Navbar />
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
