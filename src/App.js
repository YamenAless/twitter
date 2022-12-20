import './App.css';
import { Route,Routes } from 'react-router-dom';
import Profile from './components/profile/Profile';
import SignUp from './components/SignUp/SignUp';
import {DataCtx}  from './components/context/SaveData/SaveData.js'
import React, { Suspense, useContext } from "react";
import SignOut from './components/signout/Signout';
import Signin from './components/Signin/SingIn';
import Loadin from './components/loading/Loadin';
const Home = React.lazy(()=> import('./components/home/Home')) ;


const  App = () => {
  const {token} = useContext(DataCtx)
  return (
    <div className="App">
      {/* <Loadin/> */}
    <Routes>
      {token ? <Route path='/' element={<Suspense fallback={<Loadin/>}><Home/></Suspense>}/> : <Route path='/' element={<SignUp/>}/> }  
      <Route path='/signout' element={<SignOut/>}/> 
      <Route path='/profile' element={<Suspense fallback={<Loadin/>}><Profile /></Suspense>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/:' element={<>NotFound</>}/>
      </Routes>
    </div>
  );
}

export default App;
