import { Badge, Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="p-3 h-100">
      <Card.Img className="h-25 object-fit-cover" src={product?.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.category}</Card.Text>
        <Card.Text>{product?.description}</Card.Text>
        <Badge bg="secondary">${product?.price}</Badge>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
