import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

function App() {
  const notify = () => toast.success('Here is your toast.');
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}

export default App;
