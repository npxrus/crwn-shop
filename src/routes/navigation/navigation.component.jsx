import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <header>
        <nav className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <ul className='nav-links-container'>
            <li className='nav-link'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='nav-link'>
              <Link to='/sign-in'>Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
