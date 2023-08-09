import React, { useState, useEffect } from 'react';

const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  useEffect(() => {
    if (width > 768) {
      setShowMenu(false);
    }
  }, [width]);

  return [showMenu, toggleMenu];
};

export default useShowMenu;
