import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { Register } from './pages/Register';


function App() {
  return (
    <Layout>
  <Routes >
       <Route path='/' element={<Main/>}/>
     <Route path='register' element={<Register/>}/>
    </Routes>
    </Layout>
  
  );
}

export default App;
