import { Alert, Dropdown, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const SelectCategories = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAllCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        category: {selectedCategory}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isLoading && (
          <Dropdown.Item>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Dropdown.Item>
        )}
        {isError && <Dropdown.Item>Something went wrong!</Dropdown.Item>}

        {!isLoading && !isError && (
          <>
            <Dropdown.Item onClick={() => setSelectedCategory("all")}>
              all
            </Dropdown.Item>
            {categories?.map((category) => (
              <Dropdown.Item
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectCategories;
