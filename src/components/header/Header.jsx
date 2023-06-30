import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/react.svg'
import './Header.scss'
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import Search from '../search/Search';




const Header = () => {

    const user = useSelector(state => state.user.account)

    const navigate = useNavigate()
    const dispatch = useDispatch();


    return (
        <div className='header'>


            <Navbar bg="light" expand="lg" className='px-3 d-flex justify-content-between'>
                <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                        <span> caodev.com</span>
                </Navbar.Brand>
                    <Search/>
                    <Nav>

                        <NavDropdown title="Setting">

                                <Link className="dropdown-item" to="/login">Login</Link>
                                <NavDropdown.Divider />
                                <div className="dropdown-item"> Log out</div>

                        </NavDropdown>

                    </Nav>
            </Navbar>
        </div>
    )
}

export default Header