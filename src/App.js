import './App.css';
import Layout from './components/Layout/Layout';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='*' element={<>NotFound</>}/> */}
      </Routes>
    </div>
  );
}

export default App;
