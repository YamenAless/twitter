import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
        <Route path='*/:' element={<>NotFound</>}/>
      </Routes>
    </div>
  );
}

export default App;
