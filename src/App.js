import { Fragment } from "react";
import { useState } from "react";

import ItemsForm from "./components/ItemsForm";
import ItemsList from "./components/ItemsList";

const App = () => {
  const [items, setItems] = useState([]);

  const addItemsHandler = (newProduct) => {
    if (newProduct.product !== "" && newProduct.amount > 0) {
      setItems((prevItems) => [...prevItems, newProduct]);
    }
  };

  const removeItemsHandler = (event) => {
    event.target.style.setProperty("text-decoration", "line-through");
  };

  return (
    <Fragment>
      <ItemsForm onAddItems={addItemsHandler} />
      <ItemsList products={items} onRemove={removeItemsHandler} />
    </Fragment>
  );
};

export default App;
