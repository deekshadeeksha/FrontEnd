import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";

function App() {
  const url =
    "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6";
  const [dataApi, setDataApi] = useState([]);
  const [image, setImage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [itemsTotal, setItemsTotal] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDataApi(response.data.data.products);
      setImage(response.data.data.products[0].imageURLs[0]);
    });
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.map((item, index) => {
      total = total + item.itemDetails.retailPrice * item.itemCount;
    });
    setItemsTotal(total);
  };

  const addToCart = (itemToAdd) => {
    let count = 0;
    if (cartItems !== null || cartItems !== undefined) {
      cartItems.map((item) => {
        if (
          item.itemDetails.fulhausProductName === itemToAdd.fulhausProductName
        ) {
          item.itemCount = item.itemCount + 1;
          count++;
        }
      });
      if (count === 0) {
        const itemObject = {
          itemCount: 1,
          itemDetails: itemToAdd,
        };
        setCartItems((cartItems) => [...cartItems, itemObject]);
      }
    }
    calculateTotal();
    setShowCart(true);
  };

  return (
    <>
      <div className="App">
        <button
          class="float-right w-fit text-lg"
          onClick={() => setShowCart(true)}
        >
          Cart
        </button>
        {typeof dataApi != "undefined" ? (
          <div class="flex flex-row">
            <div class="basis-1/2 p-3">
              <img src={image} alt="" />
            </div>
            <div class="w-200 grid grid-cols-3 gap-3 mt-4">
              {dataApi.map((item, index) => (
                <div class="flex justify-center">
                  <div class="block max-w-sm border border-gray-200">
                    <a href="#!">
                      <img
                        class="rounded-t-lg"
                        src={item.imageURLs[0]}
                        alt=""
                      />
                    </a>
                    <div class="p-6 ">
                      <h5 class="mb-2 text-left text-xl font-medium text-neutral-800 dark:text-neutral-50 mx-0">
                        {item.fulhausProductName}
                      </h5>
                      <div class="flex items-center">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div class="flex items-center">
                        <p>
                          ${item.retailPrice}
                          <AddShoppingCartIcon
                            onClick={() => addToCart(item)}
                            style={{
                              color: "red",
                              stroke: "#ffffff",
                              strokeWidth: 1,
                              background: "#ededed",
                              borderRadius: "22px",
                              padding: "12px",
                              height: "50px",
                              width: "50px",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="cartDiv">
        <Cart
          onCloseCart={() => {
            setShowCart(false);
          }}
          show={showCart}
          cartItemsToDisplay={cartItems}
          allTotal={itemsTotal}
          updateArray={setCartItems}
        />
      </div>
    </>
  );
}

export default App;
