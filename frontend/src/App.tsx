import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import SignUpPage from './pages/auth/SignUpPage'
import Homepage from './pages/auth/Homepage'
import LoginPage from './pages/auth/LoginPage'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          {/* <Toaster/> */}
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
