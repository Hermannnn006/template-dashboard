import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
    return (
       <>
        <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 md:static md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
                <span className="text-white font-bold uppercase">Sidebar</span>
                <button className="text-white md:hidden" onClick={closeSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    <NavLink to="/" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Dashboard
                    </NavLink>
                </nav>
            </div>
        </div>
       </>
    );
};

Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
