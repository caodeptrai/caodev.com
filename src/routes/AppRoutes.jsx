import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRoutes from './PrivateRoutes';
import TableUsers from '../components/tableUsers/TableUsers';
import Error404 from '../pages/error/Error404';
import Document from '../pages/document/Document';
import Project from '../pages/project/Project';
import SourceCode from '../pages/sourceCode/SourceCode';
import Vps from '../pages/vps/Vps';
import Contact from '../pages/contact/Contact';
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/document' element={<Document/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/source-code' element={<SourceCode/>}/>
                <Route path='/vps' element={<Vps/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='users' element={
                    <PrivateRoutes>
                        <TableUsers />
                    </PrivateRoutes>
                } />
                <Route path='*' element={<Error404 />} />
            </Routes>

        </>
    )
}

export default AppRoutes