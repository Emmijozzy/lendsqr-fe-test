import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextProvider from './contexts/ContextProvider';
import Login from './pages/login/Login';
import User from './pages/user/User';
import UserDetails from './pages/user/UserDetails/UserDetails';
import Layout from './layout/Layout';

function App() {

  return (
    <ContextProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user/*" element={<Layout />}>
            {/* <Route index element={<Users />} /> */}
            {/* <Route index path="users" element={<Users />} /> */}
            {/* <Route path="users/:id" element={<UserDetail />} /> */}
          </Route>

          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
