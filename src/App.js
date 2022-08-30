
import './App.css';
import Navbar from './Navbar/Navbar';

// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//     </div>
//   );
// }




import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'

import AddUsers from './Components/Users/AddUsers';
import EditUsers from './Components/Users/EditUsers';
import {HashRouter, Routes, Route} from 'react-router-dom';


export const App = () => {
  return (
    <HashRouter>
  
          <Navbar/>
      
      <div clssName='sub-all'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/user/add' element={<AddUsers/>}/>
        <Route path='/user/edit/:id' element={<EditUsers/>}/>
        <Route path='/Contact' element={<Contact/>}/>
     
    
      </Routes> 
       </div>
    </HashRouter>
    
  )
}



export default App;
