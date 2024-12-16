'use client';

import { useState, useEffect } from 'react';

import Menu from '@components/menu';
import HamburgerButton from '@ui/hamburgerButton';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      aria-label='navigation'
      className={classNames('header', {
        'header--scroll': scrollY > 2,
      })}
    >
      <nav className='navbar'>
        <div className='navbar-header'>
          <Link className='navbar-brand' href='#' aria-label='go to home'>
            <Image
              fill
              alt='logo'
              src='/assets/svg/brand.svg'
              className='brand'
            />
          </Link>
          <HamburgerButton handleDropdown={handleDropdown} isOpen={isOpen} />
        </div>
        <Menu handleDropdown={handleDropdown} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navigation;