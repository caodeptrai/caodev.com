import { useState } from 'react';
import './Sidebar.scss';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';
const Sidebar = () => {
     const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
      const [open, setOpen] = useState(false);
    return (
        <aside className='sidebar col-sm-2 '>

            <ul className='sidebar-list'>
                <li className={toggleState === 1 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/' className='sidebar-item-link'  onClick={() => toggleTab(1)}
                >
                         <i className="fa-solid fa-house"></i> <span>Trang chủ</span>
                    </Link>
                </li>
                <li className={toggleState === 2 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/document' className='sidebar-item-link' onClick={() => toggleTab(2)}>
                    <i className="fa-regular fa-folder-open"></i><span>Tài liệu</span>
                    </Link>
                </li>
                <li className={toggleState === 3 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/project' className='sidebar-item-link' onClick={() => toggleTab(3)}>
                     <i className="fa-solid fa-diagram-project"></i><span>Projects</span>
                    </Link>
                   </li>
                <li className='sidebar-item-collap d-flex flex-column '
                onClick={() => setOpen(!open)}
        
                >
                    <div className='content-item'>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span>Tiện ích</span>
                        <i className={open ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'}></i>
                        
                    </div>
                    <Collapse in={open}>
                       
                        <div>
                            <li className={toggleState === 4 ? 'sidebar-sub-item active' : 'sidebar-item'}>
                                <Link to='/' className='sidebar-item-link' onClick={() => toggleTab(4)}>
                                <i className="fa-solid fa-code"></i><span>Key active</span>                                
                                </Link>
                                </li>
                            <li className={toggleState === 5 ? 'sidebar-sub-item active' : 'sidebar-item'}>
                                <Link to='/' className='sidebar-item-link' onClick={() => toggleTab(5)}>
                                <i className="fa-solid fa-globe"></i><span>Tài khoản chatGPT</span>                                
                                </Link>
                                </li>
                            <li className={toggleState === 6 ? 'sidebar-sub-item active' : 'sidebar-item'}>
                                <Link to='/' className='sidebar-item-link' onClick={() => toggleTab(6)}>
                                <i class="fa-brands fa-windows"></i><span>Phần mềm</span>                                
                                </Link>
                                </li>
                        </div>
                    </Collapse>
                
                </li>
                <li className={toggleState === 7 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/source-code' className='sidebar-item-link' onClick={() => toggleTab(7)}>
                        <i className="fa-solid fa-code"></i><span>Source code</span>                 
                    </Link>
                    
                    </li>
                <li className={toggleState === 8 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/vps' className='sidebar-item-link' onClick={() => toggleTab(8)}>
                        <i className="fa-solid fa-globe"></i><span>Vps</span>                 
                    </Link>
                    
                    </li>
                <li className={toggleState === 9 ? 'sidebar-item active' : 'sidebar-item'}>
                    <Link to='/contact' className='sidebar-item-link' onClick={() => toggleTab(9)}>
                        <i className="fa-solid fa-headset"></i><span>Liên hệ</span>                 
                    </Link>
                    
                    </li>
            </ul>


        </aside>
    )
}

export default Sidebar