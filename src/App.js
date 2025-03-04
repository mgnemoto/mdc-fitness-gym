import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ActivitiesPage from './pages/activitiespage/ActivitiesPage';
import SignUpPage from './pages/signupage/SignUpPage';
import FreeClassPage from './pages/freeClassPage/FreeClassPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route path='/mdc-fitness-gym' index element={<HomePage/>}/>
          <Route path='/activities' element={<ActivitiesPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/freeclass' element={<FreeClassPage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
