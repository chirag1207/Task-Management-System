import Login from './pages/Login'
import{ Router, Routes, Route, Navigate,Outlet, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import TaskDetails from './pages/TaskDetails';
import Users from './pages/Users';
import Trash from './pages/Trash';  

function App() {
  
  return (
    <main className = 'w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <route elementr ={<Layout/>}>
          <Route path = '/' element={<Navigate to = '/dashboard'/>}/>
          <Route path = '/dashboard' element={<Dashboard/>}/>
          <Route path = '/tasks' element={<Tasks/>}/>
          <Route path = '/completed/:staus' element={<TaskDetails/>}/>
          <Route path = '/users' element={<Users/>}/>
          <Route path = '/trash' element={<Trash/>}/>
        </route>
      </Routes>
    </main>
  )
  
}

export default App;
