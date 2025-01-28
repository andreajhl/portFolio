import { CV_URL } from '@constants/networkLinks';
import wordings from '@wordings';
import classNames from 'classnames';
import Link from 'next/link';
import './styles.scss';

const MenuItem = ({ title, text, href, onClick }) => (
  <li role='menuitem' className='menu-item'>
    <Link
      href={href}
      title={title}
      onClick={onClick}
      className='menu-item-link'
    >
      {text}
    </Link>
  </li>
);

const Menu = ({ isOpen, handleDropdown }) => {
  const { navbar: { initial, about, skill, projects, contact, cv } } = wordings;

  const menuItems = [
    { title: 'Home', href: '/#home', text: initial },
    { title: 'About Us', href: '/#about', text: about },
    { title: 'Skills', href: '/#skill', text: skill },
    { title: 'Projects', href: '/#projects', text: projects },
    { title: 'Contact Us', href: '/#contact', text: contact },
  ];

  return (
    <div className={classNames('menu-collapse', { 'menu-collapse-open': isOpen })}>
      <ul className='menu-list' role='menu'>
        {menuItems.map(item => (
          <MenuItem
            {...item}
            key={item.title}
            onClick={handleDropdown}
          />
        ))}
        <li role='menuitem'>
          <Link
            title={cv}
            href={CV_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='menu-item-btn'
            aria-label='Go to curriculum'
          >
            {cv}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
