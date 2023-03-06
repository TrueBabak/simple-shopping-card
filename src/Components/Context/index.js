import { createContext, useState } from "react";
import { ShopData } from "../Database";
// Contexts
const ContextApi = {
  shopItemLength: ShopData.length,
  shopItem: [],
  options: [],
  setShopItem: () => {},
  incrementHandler: () => {},
  decrementHandler: () => {},
  removeHandler: () => {},
  offerHandler: () => {},
  filterItem: () => {},
  selectedOption: null,
  setSelectedOption: () => {},
};
// Store

export const Context = createContext(ContextApi);
export const options = [
  { value: "All", label: "All" },
  { value: "S", label: "S" },
  { value: "L", label: "L" },
  { value: "X", label: "X" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

// Provider
const ContextsProvider = ({ children }) => {
  // for sizeavalble filter in navbar
  const [selectedOption, setSelectedOption] = useState(null);
  // ------------------------------------------------------------

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
  const removeHandler = (id) => {
    const filteredProduct = shopItem.filter((myProduct) => myProduct.id !== id);
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
  const filterItem = (e) => {
    let customShopItem = [...ShopData];
    setSelectedOption(e.target.value);
    const updateSHopItem = customShopItem.filter((item) => {
      return item.availableSize.indexOf(e.target.value) >= 0;
    });
    console.log(updateSHopItem);
    setShopItem(updateSHopItem);
    if (e.target.value === "All") {
      console.log("All");
      setShopItem(customShopItem);
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
        filterItem,
        options,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
