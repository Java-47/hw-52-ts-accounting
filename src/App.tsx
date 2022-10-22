import './App.css';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <Routes>
      <Route path="/" element={<Guest />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
