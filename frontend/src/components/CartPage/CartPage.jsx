import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";
import { FaMinus, FaPlus, FaTrash, FaTimes } from "react-icons/fa";

const API_URL = "https://food-delivery-backend-xo2u.onrender.com";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, totalAmount } =
    useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  const buildImageUrl = (path) => {
    if (!path) return "";
    return path.startsWith("http")
      ? path
      : `${API_URL}/uploads/${path.replace(/^\/uploads\//, "")}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#1a120b]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in-down">
          <span className="font-dancingscript block text-5xl sm:text-6xl md:text-7xl mb-2 bg-gradient-to-r from-amber-100 to-amber-400 bg-clip-text text-transparent">
            Your Cart
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center animate-fade-in">
            <p className="text-amber-100/80 text-xl mb-4">
              Your Cart is empty!!
            </p>
            <Link
              to="/menu"
              className="transition-all duration-300 text-amber-100 inline-flex items-center gap-2 hover:gap-3 hover:bg-amber-800/50 bg-amber-900/40 px-6 py-2 rounded-full font-cinzel text-sm uppercase"
            >
              Browse All Items
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cartItems
                .filter((ci) => ci && ci._id && ci.item) // only valid entries
                .map(({ _id, item, quantity }) => {
                  const name = item?.name ?? "Item";
                  const price = Number(item?.price ?? 0);
                  const imageUrl = buildImageUrl(item?.imageUrl || item?.image);

                  return (
                    <div
                      key={_id}
                      className="group bg-amber-900/20 p-4 rounded-2xl border-4 border-dashed border-amber-500 backdrop-blur-sm flex flex-col items-center gap-4 transition-all duration-300 hover:border-solid hover:shadow-xl hover:shadow-amber-900/10 transform hover:-translate-y-1 animate-fade-in"
                    >
                      <div
                        className="w-24 h-24 flex-shrink-0 cursor-pointer relative overflow-hidden rounded-lg transition-transform duration-300"
                        onClick={() => setSelectedImage(imageUrl)}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full bg-amber-800 flex items-center justify-center text-amber-200">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="w-full text-center">
                        <h3 className="text-xl font-dancingscript text-amber-100">
                          {name}
                        </h3>
                        <p className="text-amber-100/80 font-cinzel mt-1">
                          ₹{price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(_id, Math.max(1, quantity - 1))
                          }
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-all duration-200 active:scale-95"
                        >
                          <FaMinus className="text-amber-100" />
                        </button>
                        <span className="w-8 text-center text-amber-100 font-cinzel">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(_id, quantity + 1)}
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-all duration-200 active:scale-95"
                        >
                          <FaPlus className="text-amber-100" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <button
                          onClick={() => removeFromCart(_id)}
                          className="bg-amber-900/40 px-3 py-1 rounded-full font-cinzel text-xs uppercase transition-all duration-300 hover:bg-amber-800/50 flex items-center gap-1 active:scale-95"
                        >
                          <FaTrash className="w-4 h-4 text-amber-100" />
                          <span className="text-amber-100">Remove</span>
                        </button>
                        <p className="text-sm font-dancingscript text-amber-300">
                          ₹{(price * quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Cart summary */}
            <div className="mt-12 pt-8 border-t border-amber-800/30 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                <Link
                  to="/menu"
                  className="bg-amber-900/40 px-8 py-3 rounded-full font-cinzel uppercase tracking-wider hover:bg-amber-800/50 transition-all duration-300 text-amber-100 inline-flex items-center gap-2 hover:gap-3 active:scale-95"
                >
                  Continue Shopping
                </Link>
                <div className="flex items-center gap-8">
                  <h2 className="text-3xl font-dancingscript text-amber-100">
                    Total: ₹{Number(totalAmount).toFixed(2)}
                  </h2>
                  <Link
                    to="/checkout"
                    className="bg-amber-900/40 px-8 py-3 rounded-full font-cinzel uppercase tracking-wider hover:bg-amber-800/50 transition-all duration-300 text-amber-100 inline-flex items-center gap-2 active:scale-95"
                  >
                    Checkout Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Full-size image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-amber-900/40 bg-opacity-75 backdrop-blur p-4 overflow-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-1 right-1 bg-amber-900/80 rounded-full p-2 text-black hover:bg-amber-800/90 transition-transform duration-200 active:scale-90"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
