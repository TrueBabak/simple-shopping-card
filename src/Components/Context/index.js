import { createContext, useState } from "react";
const productList = [
  { name: "React js", price: 120, quantity: 1, id: 1 },
  { name: "Vue js", price: 220, quantity: 2, id: 2 },
  { name: "Angular js", price: 180, quantity: 3, id: 3 },
];
// Contexts
const ContextApi = {
  Products: [],
  setProducts: () => {},
};
// Store
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Products, setProducts] = useState(productList);
  return (
    <Context.Provider value={{ Products, setProducts }}>
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
