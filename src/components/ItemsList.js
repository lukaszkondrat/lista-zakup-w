import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  return (
    <div className={classes.list}>
      <h2>Lista zakupów (kliknij produkt, aby go usunąć)</h2>
      <ul>
        {props.products.map((el) => (
          <li key={el.id} onClick={props.onRemove}>
            {el.product} - {el.amount}x
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
