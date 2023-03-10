// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Feature/Movie/Footer/Footer';
// import Home from './Feature/Movie/Home/Home.jsx/Home';
// import { Signin } from './Feature/User/Signin/Signin';
import { Signup } from './Feature/User/Signup/Signup';


function App() {
  return (
    <div className="App">
    <Signup/>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/signin' element={<Signin/>}/> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
