import './App.css';
import { Route,Routes } from 'react-router-dom';
import {DataCtx}  from './components/context/SaveData/SaveData.js'
import React, { Suspense, useContext } from "react";
import SignUp from './components/SignUp/SignUp';
import SignOut from './components/signout/Signout';
import Signin from './components/Signin/SingIn';
import Loadin from './components/loading/Loadin';
const Home = React.lazy(()=> import('./components/home/Home')) ;
const Profile =  React.lazy(()=>import ('./components/profile/Profile')) ;


const  App = () => {
  const {token} = useContext(DataCtx)
  return (
    <div className="App">
    <Routes>
      <Route path='/'  element={token ? <Suspense fallback={<Loadin/>}><Home/></Suspense> : <Suspense fallback={<Loadin/>}><SignUp/></Suspense>  }/>
      <Route path='/signout' element={<SignOut/>}/> 
      <Route path='/profile' element={<Suspense fallback={<Loadin/>}><Profile /></Suspense>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/:' element={<>NotFound</>}/>
      </Routes>
    </div>
  );
}

export default App;
