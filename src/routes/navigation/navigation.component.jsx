import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          {isCartOpen && <CartDropdown />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
