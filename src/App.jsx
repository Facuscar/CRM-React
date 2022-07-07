import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Login from './layout/Login'
import Beginning from './pages/Beginning';
import LoginForm from './pages/LoginForm';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
            <Route index element={ <LoginForm/> } />
          </Route>

          <Route path="/clients" element={<Layout/>}>  
            <Route index element={<Beginning/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
