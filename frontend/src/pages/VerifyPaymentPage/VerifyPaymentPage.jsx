import React, { useState, useEffect } from "react";
import { useCart } from "../../CartContext/CartContext";
import { replace, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyPaymentPage = () => {
  const { clearCart } = useCart();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [statusMsg, setStatusMsg] = useState("Verifying Payment...");

  // GRAB TOKEN
  const token = localStorage.getItem("authToken");
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  useEffect(() => {
    const params = new URLSearchParams(search);
    const success = params.get("success ");
    const session_id = params.get("session_id");

    //missing or cancelled payment
    if (success !== "true" || !session_id) {
      if (success === "false") {
        navigate("/checkout", { replace: true });
        return;
      }
      setStatusMsg("payment failed but order placed for completion");
      return;
    }

    // STRIPE SUCCESS=TRUE
    axios
      .get("https://food-delivery-backend-xo2u.onrender.com/api/orders/confirm", {
        params: { session_id },
        headers: authHeaders,
      })
      .then(() => {
        clearCart();
        navigate("/myorder", { replace: true });
      })
      .catch((err) => {
        console.error("Confirmation error:", err);
        setStatusMsg("There was an error");
        clearCart(false);
      });
  }, [search, clearCart, navigate, authHeaders]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <p>{statusMsg}</p>
    </div>
  );
};

export default VerifyPaymentPage;
