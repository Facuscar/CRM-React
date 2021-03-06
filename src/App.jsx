import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Beginning from './pages/Beginning';
import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';
import ClientInfo from './pages/ClientInfo';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/clients" element={<Layout/>}>  
            <Route index element={<Beginning/>} />
            <Route path="new" element={<NewClient/>} />
            <Route path="edit/:id" element={<EditClient/>} />
            <Route path=":id" element={<ClientInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
