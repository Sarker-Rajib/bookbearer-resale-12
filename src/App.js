import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const notify = () => toast.success('Here is your toast.');
  return (
    <div className="App">
      <button onClick={notify}>Make me a toast</button>

      <Toaster />
    </div>
  );
}

export default App;
