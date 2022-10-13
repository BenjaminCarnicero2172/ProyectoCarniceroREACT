import './CartWidget.css'
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
    //icono
    return (
        <Link to='/cart'>

        <BsCart4 />
        </Link>
      );
}
 

export default CartWidget;