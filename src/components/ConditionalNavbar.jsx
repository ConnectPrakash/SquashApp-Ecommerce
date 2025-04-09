import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';

function ConditionalNavbar() {
    const location = useLocation();
    const noNavbarRoutes = ['/signup','/Login'];
    
  return !noNavbarRoutes.includes(location.pathname) ? <Navbar/> : null;
}

export default ConditionalNavbar
