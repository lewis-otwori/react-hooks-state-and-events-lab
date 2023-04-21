import React, {useState} from "react";

function Item({ name, category }) {
  const [isOnCart, setCart] = useState(true)
  function handleCart () {
    setCart((isOnCart) => !isOnCart)
  }
  const liClass = isOnCart ? "" : "in-cart"
  const addClass = isOnCart ? "remove" : "add"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addClass} onClick={handleCart}> {isOnCart ? "Add to Cart" : "Remove from Cart"} </button>
    </li>
  );
}

export default Item;