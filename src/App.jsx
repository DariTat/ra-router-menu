import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import './App.css'

export default function App() {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
      </div>
    </>
    
  );
}

const Menu = ()=> {
  return (
    <>
    <nav className='menu'>
      <NavLink className='menu__item' to='/'>Главная</NavLink>
      <NavLink className='menu__item' to='/drift'>Дрифт-такси</NavLink>
      <NavLink className='menu__item' to='/timeattack'>Time Attack</NavLink>
      <NavLink className='menu__item' to='/forza'>Forza Karting</NavLink>
    </nav>
    <Outlet/>
    </>
  )  
}



