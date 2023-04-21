import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectCategory, setSelectedCategory] = useState("All")
  function handleChange (e){
    setSelectedCategory(e.target.value)
  }
  const categorySelected = items.filter((item) => {
    return selectCategory === "All" ? items : item.category === selectCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorySelected.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;