'use client';

import classNames from 'classnames';
import './styles.scss';

const HamburgerButton = ({ isOpen, handleDropdown }) => (
  <button
    data-toggle='collapse'
    aria-expanded={isOpen}
    onClick={handleDropdown}
    className={classNames('toggle', { open: isOpen })}
  >
    <span className='icon-bar'/>
    <span className='icon-bar'/>
    <span className='icon-bar'/>
  </button>
);

export default HamburgerButton;
