import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function Layout() {
  return (
    <div>
        <Navigation></Navigation>
        <Outlet />
    </div>
  );
}

export default Layout;
