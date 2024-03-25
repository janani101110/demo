import React from "react";

import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import {Home} from './Pages/Home/Home';
import {Resources} from './Pages/Resources/Resources';
import {Writepost} from './Pages/Resources/Writepost';
import {Sensors} from './Pages/Resources/Sensors/Sensors';
import {MotionSen} from './Pages/Resources/Sensors/MotionSen';
//import {ProjectHome} from './Pages/Projects/ProjectHome';
import {Blogs} from './Pages/Blogs/Blogs';
import {Shopping} from './Pages/Shopping/Shopping';
import {Forum} from './Pages/Forum/Forum';
import {AboutUs} from './Pages/AboutUs/AboutUs';
import { Footer } from './Component/Footer/Footer';

import {Shoppingpost} from './Pages/Shopping/Shoppingpost';
import Profile from './Pages/Profile/Profile';
import SignUp from './Pages/LogIn/SignUp';
import Login from './Pages/LogIn/LogIn';
import { UserContextProvider } from './Context/UserContext';
import {WriteBlog} from './Pages/Blogs/WriteBlog';
import {InsidePost} from './Pages/Blogs/InsidePost';

import {ProjectHome} from './Pages/Projects/ProjectHome';
import {ProjectForm} from './Pages/Projects/ProjectForm';
import {ProjectCard} from './Pages/Projects/ProjectCard';
import {ProjectSeeMore} from './Pages/Projects/ProjectSeeMore';

import Productdescription from './Pages/Shopping/Productdescription';


function App() {
  return (
    <div>
      <UserContextProvider>
      <Router>
      <Navbar/>
      
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/resources'element={<Resources/>}/>
            <Route path='/writepost'element={<Writepost/>}/>
            <Route path='/sensors'element={<Sensors/>}/>
              <Route path='/MotionSen'element={<MotionSen/>}/>
           
         {/* <Route path='/projects'element={<Projects/>}/> */}
          <Route path='/projectseemore' element={<ProjectSeeMore />} />
          <Route path="/projectcard" element={<ProjectCard />} />
          <Route path="/projectform" element={<ProjectForm />} />
          <Route path="/projecthome" element={<ProjectHome />} />
         {/* <Route path="/" element={<Navigate to="/projecthome" />} /> */}
        

          <Route path='/blogs'element={<Blogs/>}/>
          <Route path='/shopping'element={<Shopping/>}/>
          <Route path='/forum'element={<Forum/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/shoppingpost' element={<Shoppingpost/>}/>

          <Route path='/WriteBlog' element={<WriteBlog/>}/>
          <Route path='/InsidePost' element={<InsidePost/>}/>

       
         

          <Route path='/productdescription' element={<Productdescription/>}/>
          <Route path='/profile' element={<Profile/>}/>

          <Route path='/' element={<Navigate to="/home" />}/>
          
      </Routes>
      
      <Footer/>
      </Router>
      </UserContextProvider>
      

    </div>
  );
}


export default App;
