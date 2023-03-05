import { createContext, useState } from "react";
const productList = [
  { name: "React js", price: 120, quantity: 1, id: 1 },
  { name: "Vue js", price: 220, quantity: 2, id: 2 },
  { name: "Angular js", price: 180, quantity: 3, id: 3 },
];
// Contexts
const ContextApi = {
  Products: [],
  ProductLength: productList.length,
  setProducts: () => {},
  getId: () => {},
  incrementHandler: () => {},
  decrementHandler: () => {},
  removeHandler: () => {},
  changeHandler: () => {},
  offerHandler: () => {},
};
// Store
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Products, setProducts] = useState(productList);
  let ProductLength = Products.length;
  const getId = () => {
    console.log("ff");
  };

  // increment quantity function
  const incrementHandler = (id) => {
    const TestProducts = [...Products];
    const selectedProduct = TestProducts.find((pro) => pro.id === id);
    selectedProduct.quantity++;
    setProducts(TestProducts);
  };

  // increment quantity function
  const decrementHandler = (id) => {
    const customProducts = [...Products];
    const selectedProduct = customProducts.find((pro) => pro.id === id);
    if (selectedProduct.quantity === 1) {
      const select = Products.filter((p) => p.id !== id);
      setProducts(select);
    } else {
      selectedProduct.quantity--;
      setProducts(customProducts);
    }
  };

  // remove product function
  const removeHandler = (productId) => {
    const filteredProduct = Products.filter(
      (myProduct) => myProduct.id !== productId
    );
    setProducts(filteredProduct);
  };

  // change title function with input text
  const changeHandler = (id, e) => {
    const TestProducts = [...Products];
    const selectedProduct = TestProducts.find((p) => p.id === id);
    selectedProduct.name = e.target.value;
    // console.log(selectedProduct);
    setProducts(TestProducts);
  };

  // offer handler function
  const offerHandler = (Event) => {
    if (Event.target.value === "Golden") {
      console.log("True Key");
      let myProducts = [...Products];
      myProducts.map((p) => (p.price = p.price / 2));
      setProducts(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Silver") {
      console.log("True Key");
      let myProducts = [...Products];
      myProducts.map((p) => (p.price = p.price / 3));
      setProducts(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
    if (Event.target.value === "Bronze") {
      console.log("True Key");
      let myProducts = [...Products];
      myProducts.map((p) => (p.price = p.price / 4));
      setProducts(myProducts);
      console.log(myProducts);
      alert("True Key");
    }
  };
  return (
    <Context.Provider
      value={{
        Products,
        setProducts,
        getId,
        incrementHandler,
        decrementHandler,
        removeHandler,
        changeHandler,
        offerHandler,
        ProductLength,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
