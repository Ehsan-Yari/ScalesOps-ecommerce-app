import { Col, Row } from "react-bootstrap";
import ProductCard from "./product-card";

const ProductList = ({ products }) => {
  return (
    <Row className="flex-grow-1 gap-4 p-5 justify-content-center">
      {products?.map((product) => (
        <Col key={product?.id} xs={12} lg={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
