import { useRef } from "react";
import classes from "./ItemsForm.module.css";

const ItemsForm = (props) => {
  const productNameRef = useRef();
  const amountRef = useRef();

  const addItemsHandler = (event) => {
    event.preventDefault();
    const input = {
      id: Math.random(),
      product: productNameRef.current.value,
      amount: amountRef.current.value,
    };
    props.onAddItems(input);
    productNameRef.current.value = " ";
    amountRef.current.value = " ";
  };

  return (
    <section className={classes.form}>
      <form onSubmit={addItemsHandler}>
        <h2>Dodaj nowy produkt</h2>
        <div className={classes.control}>
          <label htmlFor="product">Nazwa produktu</label>
          <input type="text" id="product" ref={productNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Ilość</label>
          <input type="number" id="amount" ref={amountRef} />
        </div>
        <div className={classes.actions}>
          <button>Dodaj</button>
        </div>
      </form>
    </section>
  );
};

export default ItemsForm;
