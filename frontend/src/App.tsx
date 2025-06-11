import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import SignUpPage from './pages/auth/SignUpPage'
import Homepage from './pages/Homepage'
import LoginPage from './pages/auth/LoginPage'
import { ToastContainer } from 'react-toastify'
import { useAuthUserHook } from './hooks/useAuthUserHook'
import NotificationPage from './pages/auth/NotificationPage'
import NetworkPage from './pages/auth/NetworkPage'

function App() {

  //get the User from the "/auth/me" route of middleware
  const {data: authUser, isLoading} = useAuthUserHook()

  //for showing the loading screen
  if(isLoading)
  {
    return <div>Loading....</div>
  }

  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={authUser?<Homepage/>: <Navigate to={"/login"}/>}/>
          <Route path='/signup' element={!authUser ? <SignUpPage/>: <Navigate to={"/"}/>}/>
          <Route path='/login' element={!authUser ? <LoginPage/>: <Navigate to={"/"}/>}/>
          <Route path='/notifications' element={authUser ? <NotificationPage/>: <Navigate to={"/login"}/>}/>
          <Route path='/network' element={authUser ? <NetworkPage/> : <Navigate to={"/login"}/>}/>
        </Route>
      </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
  </BrowserRouter>
  )
}

export default App
