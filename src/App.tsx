import React, { useState } from 'react';
import Login from './pages/login/Login';
import User from './pages/user/User';
import UserDetails from './pages/user/UserDetails/UserDetails';
import Layout from './layout/Layout';

interface NavContextType  {
  nav: boolean;
  switchNav?: () => void
}

const defaultNavState = {
  nav: false,
};

export const NavContext = React.createContext<NavContextType>(defaultNavState);

function App() {
  const [openNav, setOpenNav ] = useState(defaultNavState.nav)

  const toggleNav = () => {
    console.log('ttt')
    setOpenNav((prevopenNav) => !prevopenNav);
  };

  const openNavValue = {
    nav: openNav,
    toggleNav
  }

  return (
    <NavContext.Provider value={openNavValue}>
      <div className="app">
        <Layout />
        {/* <Login /> */}
        {/* <User />
        <UserDetails /> */}
      </div>
    </NavContext.Provider>
  );
}

export default App;
