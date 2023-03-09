import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './Wishlist.css'

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div className="wishListStyles">
        <span className="soon">COMING SOON</span>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
