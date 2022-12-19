import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import SignUp from './components/SignUp/SignUp';
import {DataCtx}  from './components/context/SaveData/SaveData.js'
import { useContext } from "react";
import SignOut from './components/signout/Signout';
import Signin from './components/Signin/SingIn';
import NotFound from './NotFound/NotFound'
const  App = () => {
  const {token} = useContext(DataCtx)
  return (
    <div className="App">
    <Routes>
      {token ? <Route path='/' element={<Home/>}/> : <Route path='/' element={<SignUp/>}/> }  
      <Route path='/signout' element={<SignOut/>}/> 
      {token && <Route path='/profile' element={<Profile/>}/>}
      {/* {!token &&  <Route path='/signup' element={<SignUp/>}/> } */}
      <Route path='/Signin' element={<Signin/>}/>
        <Route path='/:' element={<>NotFound</>}/>
      </Routes>
    </div>
  );
}

export default App;
