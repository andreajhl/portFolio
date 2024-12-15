'use client';

import { useState, useEffect } from 'react';

import Menu from '@components/menu';
import HamburgerButton from '@ui/hamburgerButton';
import classNames from 'classnames';
import Link from 'next/link';
import './styles.scss';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY((prevScrollY) => {
        const currentScrollY = window.scrollY;
        setIsVisible(!(currentScrollY > prevScrollY && currentScrollY > 50));
        return currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      aria-label='navigation'
      className={classNames('header', {
        'header--hidden': !isVisible,
        'header--scroll': scrollY > 2,
      })}
    >
      <nav className='navbar'>
        <div className='navbar-header'>
          <Link className='navbar-brand' href='#' aria-label='go to home'>
            A
          </Link>
          <HamburgerButton handleDropdown={handleDropdown} isOpen={isOpen} />
        </div>
        <Menu handleDropdown={handleDropdown} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navigation;