import { Alert, Container, Spinner, Stack } from "react-bootstrap";
import ProductList from "./components/product-list";
import Header from "./components/header";
import SelectCategories from "./components/select-categories";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectSort from "./components/select-sort";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("asc");

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAllProducts = async () => {
    const baseUrl =
      selectedCategory === "all"
        ? `https://fakestoreapi.com/products?sort=${sort}`
        : `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${sort}`;
    setIsLoading(true);
    try {
      const response = await axios.get(baseUrl);
      setProducts(response?.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [selectedCategory, sort]);

  if (isError) {
    return (
      <Stack className="vh-100 align-items-center justify-content-center">
        <Alert variant="danger">Something went wrong!</Alert>
      </Stack>
    );
  }

  return (
    <>
      <Header />
      <Container className="min-vh-100">
        <Stack className="align-items-center justify-content-center">
          <Stack direction="horizontal" gap={4} className="my-4">
            <SelectCategories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <SelectSort sort={sort} setSort={setSort} />
          </Stack>
          {isLoading && (
            <Spinner className="mt-5" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!isLoading && !isError && <ProductList products={products} />}
        </Stack>
      </Container>
    </>
  );
};

export default App;
