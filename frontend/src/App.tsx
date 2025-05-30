import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import SignUpPage from './pages/auth/SignUpPage'
import Homepage from './pages/Homepage'
import LoginPage from './pages/auth/LoginPage'
import { toast, ToastContainer } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from './lib/axios'

function App() {

  //get the User from the "/auth/me" route of middleware
  const {data: authUser, isLoading} = useQuery({
    queryKey: ["authUser"],
    queryFn: async()=>{
      try{
        const res = await axiosInstance.get("/auth/me")
        return res.data
      }catch(err: any)
      {
        //for preventing the popup for the first time
        if(err.response && err.response.status === 401)
          return null;
        toast.error(err.response.data.message || "Something went wrong")
      }
    }
  })

  console.log("Auth user from App.tsx: ",authUser)
  //for showing the loading screen
  if(isLoading)
  {
    return <div>Loading....</div>
  }

  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={authUser?<Homepage/>: <Navigate to={"/signup"}/>}/>
          <Route path='/signup' element={!authUser ? <SignUpPage/>: <Navigate to={"/"}/>}/>
          <Route path='/login' element={!authUser ? <LoginPage/>: <Navigate to={"/"}/>}/>
        </Route>
      </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
  </BrowserRouter>
  )
}

export default App
