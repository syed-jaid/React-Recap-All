import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world! </h1>
      <button class="btn w-64 rounded-full" onClick={() => toast('How are you')}>Click This</button>
      <ToastContainer />
    </div>
  );
}

export default App;
