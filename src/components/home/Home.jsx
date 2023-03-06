import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import modular1 from "../../assets/images/modular1.jpg";
import modular2 from "../../assets/images/modular2.jpg";
import modular3 from "../../assets/images/modular3.jpeg";
import modular4 from "../../assets/images/modular4.jpeg";
import modular5 from "../../assets/images/modular5.jpeg";
import modular6 from "../../assets/images/background-pic.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={modular1}
              className="d-block w-100 modular"
              alt="Home synth"
            />
          </div>
          <div className="carousel-item">
            <img
              src={modular2}
              className="d-block w-100 modular"
              alt="Home synth 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={modular3}
              className="d-block w-100 modular"
              alt="Home synth 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src={modular4}
              className="d-block w-100 modular"
              alt="Home synth 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src={modular5}
              className="d-block w-100 modular"
              alt="Home synth 5"
            />
          </div>
          <div className="carousel-item">
            <img
              src={modular6}
              className="d-block w-100 modular"
              alt="Home synth 6"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="title">
        Jazzmin Synthesizers has been in business since 1979, producing a wide
        range of synthesizers and effects. Specialising in live performance and
        studio equipment, we understand what performers need to complete their
        sound and look. Our products are designed by musicians for musicians -
        producing an affordable range that is both reliable and high quality.
      </h1>
      <Footer />
    </div>
  );
};

export default Home;
