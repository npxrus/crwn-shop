import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  CheckoutItemCell,
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemQuantity,
  CheckoutItemValue,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <CheckoutItemCell>{name}</CheckoutItemCell>
      <CheckoutItemQuantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </CheckoutItemQuantity>
      <CheckoutItemCell>{price}</CheckoutItemCell>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
