import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Haeder'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
   
    <BrowserRouter>
     <Header/>
     <Toaster position='top-right' reverseOrder={true}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
