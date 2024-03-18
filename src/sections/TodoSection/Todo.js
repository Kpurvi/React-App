import React, { useState } from "react";
import List from "./List";

function TodoSection() {
  const [currentItem, setCurrentItem] = useState(" ");
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemsToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem(" ");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              placeholder="Add item"
              value={currentItem}
              onChange={onChangeHandler}
            />
            <button onClick={addItemsToList}>+ </button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default TodoSection;
