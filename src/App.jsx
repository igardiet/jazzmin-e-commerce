// import AuthProvider from "./auth/context/AuthProvider";
import CartProvider from "./context/CartContext";
import ProductProvider from "./context/ProductContext";
import AppRoutes from "./router/AppRoutes";

export const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        {/* <AuthProvider> */}
          <AppRoutes />
        {/* </AuthProvider> */}
      </CartProvider>
    </ProductProvider>
  );
}