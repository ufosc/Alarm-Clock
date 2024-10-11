import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Wrap toggleSwitch in useCallback to prevent re-creation on every render
  const toggleSwitch = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  // Memoize the context value
  const value = useMemo(() => ({ isDarkMode, toggleSwitch }), [isDarkMode, toggleSwitch]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
