
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
// import {Search} from './Component/Search/Search';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Resources} from './Pages/Resources/Resources';
import {Sensors} from './Pages/Sensors';
import {Projects} from './Pages/Projects';
// import {Blogs} from './Pages/Blog/blog';
import {Shopping} from './Pages/Shopping';
import {Forum} from './Pages/Forums/Forum'
import {AboutUs} from './Pages/AboutUs';
// import {LogIn} from './Pages/LogIn';
// import {SignUp} from './Pages/SignUp';
import {Footer} from './Component/Footer/Footer';
import ViewPost from './Pages/Forums/ViewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/resources'element={<Resources/>}/>
          <Route path='/sensors' element={<Sensors/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/shopping'element={<Shopping/>}/>

          <Route path='/forum' element={<Forum/>}/>
          <Route path='/post' element={<ViewPost/>}/>

          <Route path='/aboutus'element={<AboutUs/>}/>
          
          
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
