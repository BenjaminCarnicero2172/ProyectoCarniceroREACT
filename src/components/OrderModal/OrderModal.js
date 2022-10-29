import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OrderModal.css';

const OrderModal = ({showModal, onClose, onBuy, orderId}) => {
    return (
        <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
        <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su telefono" />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar compra
                </Button>
                <Button variant="primary" onClick={onBuy}>
                    Comprar
                </Button>
                
                </>
            )}
            {orderId && (
                <div className="footerOrderSuccess">
                 <Alert key='success' variant='success'>
                    {orderId}
                </Alert>
            <Link to='/'>
                <Button variant="success" >
                    Seguir comprando
                </Button>
            </Link>
                </div>
            )}
        </Modal.Footer>
    </Modal>
    );
}
 
export default OrderModal;