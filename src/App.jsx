import Login from './pages/Login'
import './index.css'
import { Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import TaskDetails from './pages/TaskDetails';
import Users from './pages/Users';
import Trash from './pages/Trash';
import { Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Fragment, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenSideBar } from './redux/slices/authSlice';
import { Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';





function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  return true ? (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {<Sidebar />}
      </div>
      {/* {<MobileSidebar/>} */}
      <div className="flex-1 overflow-y-auto">
        {<Navbar />}
      </div>
      <div className="p-4 2x1:px-10">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} replace />
  )
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const MobileMenuref = useRef();
  const closeSidebar = (e) => {
    if (MobileMenuref.current && !MobileMenuref.current.contains(e.target)) {
      dispatch(setOpenSideBar(false));
    }
  }
  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-10"
      >
        {(ref) => (
          <div ref={(node) => (mobileMenuref.current = node)} className={clsx("md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ", isSidebarOpen ? "translate-x-0 " : "translate-x-full")}
            onClick={() => closeSidebar()}>

            <div className="bg-white w-2/4 h-full">
              <div className="w-full flex justify-end px-5 mt-5">
                <button onClick={() => closeSidebar()} className="flex justify-end items-end">
                  <IoMdClose size={25} />
                </button>
              </div>
              <div className='mt-10'>
                <Sidebar />
              </div>

            </div>
          </div>
          )}
      </Transition>
    </>);
};
function App() {

    return (

      <main className='w-full min-h-screen bg-[#f3f4f6]'>

        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/completed/:status' element={<Tasks />} />
            <Route path='/in-progress/:status' element={<Tasks />} />
            <Route path='/todo/:status' element={<Tasks />} />
            <Route path='/users' element={<Users />} />
            <Route path='/trash' element={<Trash />} />
            <Route path='/task/:id' element={<TaskDetails />} />
          </Route>
          <Route path='/log-in' element={<Login />} />
        </Routes>
        <Toaster richColors />
      </main>
    )

  }

  export default App;
