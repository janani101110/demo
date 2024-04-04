import React from 'react';
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import {Home} from './Pages/Home/Home';
import {Resources} from './Pages/Resources/Resources';
import {Sensors} from './Pages/Resources/Sensors/Sensors';
import {MotionSen} from './Pages/Resources/Sensors/MotionSen';
import {TempSen} from './Pages/Resources/Sensors/TempSen';
import {EnvirSen} from './Pages/Resources/Sensors/EnvirSen';
import {GasSen} from './Pages/Resources/Sensors/GasSen';
import {ImageSen} from './Pages/Resources/Sensors/ImageSen';
import {LightSen} from './Pages/Resources/Sensors/LightSen';
import {ProxiSen} from './Pages/Resources/Sensors/ProxiSen';
import {SoundSen} from './Pages/Resources/Sensors/SoundSen';
import {Writepost} from './Pages/Resources/Writepost';
import {ResoPostdetails} from './Pages/Resources/ResoPostdetails';
import {ResoEditpost} from './Pages/Resources/ResoEditpost';
import {Projects} from './Pages/Projects/Projects';
import {Blogs} from './Pages/Blogs/Blogs';
import {Shopping} from './Pages/Shopping/Shopping';
import {Forum} from './Pages/Forum/Forum';
import {AboutUs} from './Pages/AboutUs/AboutUs';
import { Footer } from './Component/Footer/Footer';
import {Shoppingpost} from './Pages/Shopping/Shoppingpost';
import SignUp from './Pages/LogIn/SignUp';
import Login from './Pages/LogIn/LogIn';
import { UserContextProvider } from './Context/UserContext';
import Productdescription from './Pages/Shopping/Productdescription';
import Profile from './Pages/Profile/Profile';


function App() {
  return (
    <div>
      <UserContextProvider>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/resources'element={<Resources/>}/>
            <Route path='/sensors' element={<Sensors/>}/>
              <Route path='/motionSen' element={<MotionSen/>}/>
              <Route path='/tempSen' element={<TempSen/>}/>
              <Route path='/envirSen' element={<EnvirSen/>}/>
              <Route path='/gasSen' element={<GasSen/>}/>
              <Route path='/imageSen' element={<ImageSen/>}/>
              <Route path='/lightSen' element={<LightSen/>}/>
              <Route path='/proxiSen' element={<ProxiSen/>}/>
              <Route path='/soundSen' element={<SoundSen/>}/>
              <Route path='/writepost' element={<Writepost/>}/>
              <Route path='/resopostdetails/:id' element={<ResoPostdetails/>}/>
              <Route path='/resoeditpost/:id' element={<ResoEditpost/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/blogs'element={<Blogs/>}/>
          <Route path='/shopping'element={<Shopping/>}/>
          <Route path='/forum'element={<Forum/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/shoppingpost' element={<Shoppingpost/>}/>
          <Route path='/productdescription' element={<Productdescription/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={<Navigate to="/home" />}/>
          
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      </UserContextProvider>
      

    </div>
  );
}


export default App;
