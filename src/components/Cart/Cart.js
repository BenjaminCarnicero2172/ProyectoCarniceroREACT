import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartContext from "../../contexts/CartContext";
import { BsTrashFill } from "react-icons/bs";
import './Cart.css';
import { createOrder } from "../../utils/Orders";
import OrderModal from "../OrderModal/OrderModal";

const buyerMock = {
    name: 'Benjamin',
    phone: '2236635380',
    email: 'carnicerobenjamin@gmail.com'
}

const Cart = () => {
    const {cart, total, removeItem, clear} = useContext(CartContext);
    const [user, setUser] = useState(buyerMock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();
    

const handleRemove = (itemId) => {
    removeItem(itemId);
}

const handleOpen = () => setShowModal(true);

const handleClose = () => setShowModal(false);

const handleBuy = async () => {
    const newOrder = {
        buyer: buyerMock,
        items: cart,
        total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
}

const showTable =  cart.length > 0

    return ( 
        <Container className="cartContainer">
            <h1>Carrito de compras</h1>
            {showTable && (
                <>
            <Table striped bordered hover>

                <thead>
                    <tr>
                    <th>Marca</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td> <BsTrashFill onClick={() => handleRemove(cart[0].id)} /></td>
                            </tr>
                        ))}
                    
                </tbody>
            </Table>
            <h3>Total: $ {total}</h3>
            <Link to='/'>
                    <Button variant="success">Seguir comprando</Button>
                </Link>
            <Button variant="success" onClick={handleOpen}>Finalizar Compra</Button>
                </>
            )}
            {!showTable && (
                <>
                <h3>Carrito de compras vacio </h3>
                <Link to='/'>
                    <Button variant="success">Ver productos</Button>
                </Link>
                </>
                )}
                <OrderModal 
                showModal={showModal}
                onClose={handleClose} 
                onBuy={handleBuy}
                orderId={orderId} 
                />
        </Container>
        
     );
}
 
export default Cart;