import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
            {currentUser ? (
              <li className='nav-link' onClick={signOutUser}>
                Sign Out
              </li>
            ) : (
              <li className='nav-link'>
                <Link to='/auth'>Sign In</Link>
              </li>
            )}
            <CartIcon />
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
