import { BrowserRouter } from 'react-router-dom' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { CartProvider } from './CartContext/CartContext'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
  
)
