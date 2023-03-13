import { AuthContextProvider } from "./context/authContext";
import CartProvider from "./context/CartContext";
import ProductProvider from "./context/ProductContext";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <ProductProvider>
      <AuthContextProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthContextProvider>
    </ProductProvider>
  );
};
