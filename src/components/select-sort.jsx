import { Dropdown } from "react-bootstrap";

const SelectSort = ({ sort, setSort }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        sort by: {sort}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setSort("asc")}>asc</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort("desc")}>desc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectSort;
