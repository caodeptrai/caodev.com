
import { Container } from 'react-bootstrap'
import './App.scss'
import Header from './components/header/Header'
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { handleRefresh } from './redux/actions/userAction';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh())

    }
  }, [])

  const Layout = () => {
    return (
      <div className='app'>
        <div className='row'> 
        <div className='col-12'>

        <Header />
        </div>
        </div>
        <div className='app-container row'>
          <div className='col-sm-2'>
            <Sidebar />
          </div>
          <div className='content col-sm-10'>
            <AppRoutes />
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      <div className='app-container'>
        <Layout />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />






    </>
  )
}

export default App
