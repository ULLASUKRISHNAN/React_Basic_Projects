import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        openSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => {
  return useContext(AppContext);
};
