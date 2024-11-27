import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return(
        <>
            <header>
                <div className="row justify-between items-center">
                    <div className="col-2">
                        <div className="logo">
                            <img src="../src/assets/images/logo/logo.png" alt="Logo" />    
                        </div>    
                    </div>   
                    <div className="col-6 justify-center flex">
                        <nav>
                            <ul className="flex gap-8 ps-[55px] mb-0">
                                <li>
                                    <Link to='/' className="pages">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' className="pages">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/rooms' className="pages">
                                        Rooms
                                    </Link>
                                </li>
                                <li>
                                    <Link to='page' className="pages">
                                        Page
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/blog' className="pages">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' className="pages">
                                        Contact
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to='/*' className="pages">
                                        Page Not Found
                                    </Link>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-3">
                        <div className="nav-right flex justify-end items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white group-hover:rotate-90 rotate transition-all duration-300" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><title>Apply Light Mode</title><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                            <button className="btn1 ms-[12px]">Booking Online</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;