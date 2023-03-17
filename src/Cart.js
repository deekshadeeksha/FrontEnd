import React, { useEffect, useState } from "react";
import "./App.css";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const { onCloseCart, cartItemsToDisplay, show, allTotal } = props;

  const closeCart = () => {
    onCloseCart();
  };

  const removeItem = (item) => {
    const index = cartItemsToDisplay.indexOf(item);
    if (index > -1) {
      cartItemsToDisplay.splice(index, 1);
    }
    props.updateArray(cartItemsToDisplay);
    onCloseCart();
  };

  useEffect(() => {
    if (props != null) {
      setCartItems(cartItemsToDisplay);
    }
  }, []);
  return (
    <div>
      {typeof cartItems != "undefined" && show === true ? (
        <div
          class="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="w-96 text-xl">
                      <button class="float-right w-fit" onClick={closeCart}>
                        X
                      </button>
                    </div>
                    <h1 class="text-3xl">My Orders</h1>
                    {typeof cartItemsToDisplay != "undefined" ? (
                      <div>
                        {cartItemsToDisplay.map((item, index) => (
                          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                              src={item.itemDetails.imageURLs[0]}
                              alt=""
                            />

                            <div class="flex flex-col justify-between p-4 leading-normal">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.itemDetails.fulhausProductName}
                              </h5>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                ${item.itemDetails.retailPrice}
                              </p>
                              <p>X{item.itemCount}</p>
                              <p>
                                <button
                                  class="text-white bg-black font-medium text-sm px-5 py-2.5 text-center"
                                  onClick={() => removeItem(item)}
                                >
                                  Remove
                                </button>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p class="text-3xl">Total</p>
                        <p class="text-3xl">${allTotal}</p>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <a
                          href="#"
                          class="w-96 h-12 text-center text-white bg-black font-medium text-sm px-5 py-2.5 text-center"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
