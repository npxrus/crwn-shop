import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <header>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink>
              <Link to='/shop'>Shop</Link>
            </NavLink>
            {currentUser ? (
              <NavLink onClick={signOutUser}>Sign Out</NavLink>
            ) : (
              <NavLink>
                <Link to='/auth'>Sign In</Link>
              </NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
