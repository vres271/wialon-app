import React from 'react';
import './App.css';
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Layout from './components/Layout';
import MyTable from './components/Table';

function App() {
  return (
    <div className="App" style={{margin: 'auto'}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="table" element={<MyTable />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
