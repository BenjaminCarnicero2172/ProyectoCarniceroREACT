import { Container } from 'react-bootstrap';
import './ItemListContainer.css'
const ItemListContainer = ({ greeting }) => {
    return ( 
        <Container>
        <h1>Bienvenido a TiendaCelulares!</h1>
        <h3 class="greeting">{greeting}</h3>
        </Container>
        
        
     );
}
 
export default ItemListContainer;