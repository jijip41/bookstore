import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <Outlet />
    </div>
  );
}

export default App;
