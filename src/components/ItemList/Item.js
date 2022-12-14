import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return ( 
        <Card className='itemList' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={[product.pictureUrl]} />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text className='itemPrice'>
        $ {product.price}
        </Card.Text>
        <Card.Text>
        {product.description}
        </Card.Text>
       
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">
              Ver detalle
            </Button>
          </Link>
        
      </Card.Body>
    </Card>
     );
}
 
export default Item;