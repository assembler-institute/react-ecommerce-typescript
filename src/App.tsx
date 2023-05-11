import React, {useEffect, useState} from "react";

import "./App.scss";

import ProductCard from "./components/ProductCard";

// Render the products dynamically with a loop
import products from "./products";
import Cart from "./components/Cart";
import {CartItem} from "./interfaces/products.interface";
import {loadItems} from "./utils/utils";


function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => loadItems());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleAddToCart(id: number) {
    let index = cartItems.findIndex((item: CartItem) => item.id === id);
    if (index !== -1) {
      const items = cartItems.map((item: CartItem) => {
        if (item.id === id && item.quantity < 10) {
          item.quantity = Number(item.quantity) + 1;
        }

        return item;
      });

      setCartItems(items);
    } else {
      const newItem = products.find((prod) => prod.id === id);

      if(newItem !== undefined){
        setCartItems([
          ...cartItems,
           {
             ...newItem,
             quantity: 1,
           },
         ]);
      }
    }
  }

  function handleRemove(id: number) {
    const items = cartItems.filter((item: { id: number; }) => item.id !== id);

    setCartItems(items);
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>, id: number): void {
    const items = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = Number(event.target.value);
      }
      return item;
    });

    setCartItems(items);
  }

  return (
      <main className="container-fluid">
        <div className="row">
          <div className="col col-6 col-lg-8 p-4">
            <section className="row row-cols-1">
              <div className="col">
                <h1 className="mb-4">Shop</h1>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                  {products.map((product) => (
                      <ProductCard
                          key={product.id}
                          img={product.img}
                          title={product.title}
                          price={product.price}
                          handleAddToCart={() => handleAddToCart(product.id)}
                      />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Cart
              cartItems={cartItems}
              handleRemove={handleRemove}
              handleChange={handleChange}
          />
        </div>
      </main>
  );
}

export default App;
