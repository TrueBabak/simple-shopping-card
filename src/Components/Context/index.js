import { createContext, useState } from "react";
import { ShopData } from "../Database";
import { ContextApi } from "./ContextItem";
// Contexts

// Store

export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [shopItem, setShopItem] = useState(ShopData);
  const [FilteredItem, setFilteredItem] = useState(ShopData);
  let shopItemLength = shopItem.length;

  // increment quantity function
  const incrementHandler = (id) => {
    const TestProducts = [...shopItem];
    const selectedProduct = TestProducts.find((pro) => pro.id === id);
    selectedProduct.quantity++;
    setShopItem(TestProducts);
  };

  // increment quantity function
  const decrementHandler = (id) => {
    const customProducts = [...shopItem];
    const selectedProduct = customProducts.find((pro) => pro.id === id);
    if (selectedProduct.quantity === 1) {
      const select = shopItem.filter((p) => p.id !== id);
      setShopItem(select);
    } else {
      selectedProduct.quantity--;
      setShopItem(customProducts);
    }
  };

  // remove product function
  const removeHandler = (id) => {
    const filteredProduct = shopItem.filter((myProduct) => myProduct.id !== id);
    setShopItem(filteredProduct);
  };

  // offer handler function
  const offerHandler = (Event) => {
    if (Event.target.value === "Golden") {
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 2));
      setShopItem(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Silver") {
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 3));
      setShopItem(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Bronze") {
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 4));
      setShopItem(myProducts);
      alert("True Key");
    }
  };
  const filterItem = (e) => {
    let customShopItem = [...ShopData];
    const updateSHopItem = customShopItem.filter((item) => {
      return item.availableSize.indexOf(e.target.value) >= 0;
    });
    setFilteredItem(updateSHopItem);
    setShopItem(updateSHopItem);
    if (e.target.value === "All") {
      setShopItem(customShopItem);
      setFilteredItem(customShopItem);
    }
  };
  const SortItem = (e) => {
    setShopItem(FilteredItem);
    const cloneData = [...FilteredItem];
    if (e.target.value === "Lowest") {
      let sortedData = cloneData.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      setShopItem(sortedData);
    }
    if (e.target.value === "Highest") {
      let sortedData = cloneData.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      setShopItem(sortedData);
    }
    if (e.target.value === "Defualt") {
      setShopItem(cloneData);
    }
  };
  return (
    <Context.Provider
      value={{
        shopItemLength,
        shopItem,
        setShopItem,
        incrementHandler,
        decrementHandler,
        removeHandler,
        offerHandler,
        filterItem,
        SortItem,
        FilteredItem,
        setFilteredItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
