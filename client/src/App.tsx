import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Register } from './pages/Register';


function App() {
  return (
    <Layout>
  <Routes >
       <Route path='/' element={<Main/>}/>
     <Route path='register' element={<Register/>}/>
     <Route path='login' element={<Login/>}/>
    </Routes>
    </Layout>
  
  );
}

export default App;
