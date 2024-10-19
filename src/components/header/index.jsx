import PropTypes from 'prop-types';

const Header = ({ toggleSidebar }) => {
    return (
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
                <button className="lg:hidden text-gray-500 focus:outline-none focus:text-gray-700" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center pr-4">
                <button className="bg-blue-600 py-1.5 px-3 text-white rounded-xl">User</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
