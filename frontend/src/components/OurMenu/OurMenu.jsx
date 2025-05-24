import React, { useState } from "react";
import { useCart } from "../../CartContext/CartContext";
import { dummyMenuData } from "../../assets/OmDD";
import { FaMinus,FaPlus } from "react-icons/fa";
import './OurMenu.css'

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Mexican",
  "Italian",
  "Desserts",
  "Drinks",
];

const OurMenu = () => {

  const [activeCategory, setActiveCategory] = useState(categories[0]);
    const { cartItems, addToCart, removeFromCart } = useCart();
    const displayItems = (dummyMenuData[activeCategory] || []).slice(0, 12);
    const getQuantity = (id) => cartItems.find((i) => i.id === id)?.quantity || 0;

  return (
      <div className="bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#1a120b] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
            <span className="font-dancingscript block text-5xl md:text-7xl">
              Our Exquisite Menu
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-amber-100/80">
              A Symphony of Flavors
            </span>
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-xl shadow-amber-900/30"
                    : "bg-amber-900/20 border-amber-800/30 text-amber-100/80 hover:bg-amber-800/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
  
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4">
            {displayItems.map((item, i) => {
              const quantity = getQuantity(item.id);
              return (
                <div
                  key={item.id}
                  className="-mt-4 group bg-[#2b1a12] rounded-3xl overflow-hidden border border-amber-800/30 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-1 h-44 flex justify-center items-center bg-[#3a2418] rounded-t-3xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full object-contain mt-3 mb-3 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                    />
                  </div>
  
                  <div className="p-4 text-left flex flex-col justify-between min-h-[200px]">
  
                      <div>
                        <h3 className="text-2xl font-dancingscript text-amber-100 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm font-cinzel text-amber-100/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="bg-amber-100/10 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg inline-block">
                          <span className="text-xl font-bold text-amber-300 font-dancingscript">
                            ₹{item.price}
                          </span>
                        </div>
  
                        <div className="flex items-center gap-2">
                          {quantity > 0 ? (
                            <>
                              <button
                                className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                                onClick={() =>
                                  quantity > 1
                                    ? addToCart(item, quantity - 1)
                                    : removeFromCart(item.id)
                                }
                              >
                                <FaMinus className="text-amber-100" />
                              </button>
                              <span className="w-8 text-center text-amber-100">
                                {quantity}
                              </span>
                              <button
                                className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                                onClick={() => addToCart(item, quantity + 1)}
                              >
                                <FaPlus className="text-amber-100" />
                              </button>
                            </>
                          ) : (
                            <button
                              className="bg-amber-900/40 px-4 py-1.5 rounded-full font-cinzel text-xs uppercase sm:text-sm tracking-wider transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-900/20 relative overflow-hidden border border-amber-800/50"
                              onClick={() => addToCart(item, 1)}
                            >
                              <span className="relative z-10 text-xs text-black">
                                Add to Cart
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
  
          
        </div>
      </div>
    );
}

export default OurMenu
