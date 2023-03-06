import { createContext, useState } from "react";
import { ShopData } from "../Database";
// Contexts
const ContextApi = {
  shopItemLength: ShopData.length,
  shopItem: [],
  setShopItem: () => {},
  incrementHandler: () => {},
  decrementHandler: () => {},
  removeHandler: () => {},
  offerHandler: () => {},
};
// Store
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [shopItem, setShopItem] = useState(ShopData);
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
  const removeHandler = (productId) => {
    const filteredProduct = shopItem.filter(
      (myProduct) => myProduct.id !== productId
    );
    setShopItem(filteredProduct);
  };

  // offer handler function
  const offerHandler = (Event) => {
    if (Event.target.value === "Golden") {
      console.log("True Key");
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 2));
      setShopItem(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Silver") {
      console.log("True Key");
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 3));
      setShopItem(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Bronze") {
      console.log("True Key");
      let myProducts = [...shopItem];
      myProducts.map((p) => (p.price = p.price / 4));
      setShopItem(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
  };
  return (
    <Context.Provider
      value={{
        shopItem,
        setShopItem,
        incrementHandler,
        decrementHandler,
        removeHandler,
        offerHandler,
        shopItemLength,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
