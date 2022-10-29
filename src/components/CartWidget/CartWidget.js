import './CartWidget.css'
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    //icono
    const {totalQuantity} = useContext(CartContext);
    return (
      <>
        <Link to='/cart'>
        <BsCart4 />
        </Link>
        {totalQuantity > 0 && (
        <Badge pill bg="warning" text="dark">
        {totalQuantity}
      </Badge>
    )}
      </>
      );
}
 

export default CartWidget;