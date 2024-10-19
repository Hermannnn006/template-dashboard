import PropTypes from 'prop-types';
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const DefaultLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100 relative">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
            onClick={closeSidebar} 
          />
        )}

        <div className="flex flex-col flex-1 overflow-y-auto z-10">
          <Header toggleSidebar={toggleSidebar} />
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

// PropTypes validation
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
