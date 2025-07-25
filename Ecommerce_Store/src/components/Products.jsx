import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = ({ scrollRef }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const json = await response.json();
      setData(json);
      setFilter(json);
      setCategories(["All", ...new Set(json.map((item) => item.category))]);
      setLoading(false);
    };

    getProducts();
  }, []);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (selected === "All") {
      setFilter(data);
    } else {
      const filtered = data.filter((item) => item.category === selected);
      setFilter(filtered);
    }
  };

  const fadeInStyle = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  };

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    const cards = document.querySelectorAll(".fade-in");
    cards.forEach((card) => observer.current.observe(card));

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [filter]);

  const Loading = () => (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={400} />
        </div>
      ))}
    </>
  );

  const ShowProducts = () => (
    <>
      {filter.map((product) => (
        <div
          key={product.id}
          className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4 fade-in"
          style={fadeInStyle}
        >
          <div className="card h-100 shadow border-0 rounded-4 bg-white">
            <img
              src={product.image}
              className="card-img-top p-4"
              alt={product.title}
              height="300px"
              style={{ objectFit: "contain" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">
                {product.title.substring(0, 20)}...
              </h5>
              <p className="card-text text-muted">
                {product.description.substring(0, 90)}...
              </p>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item fs-5 fw-semibold">
                $ {product.price}
              </li>
            </ul>
            <div className="card-body text-center">
              <Link to={`/product/${product.id}`} className="btn btn-outline-dark m-1">
                Buy Now
              </Link>
              <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div
      ref={scrollRef}
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-3">
        <div className="row mb-4">
          <div className="col-12 text-center text-white">
            <h2 className="display-5 fw-bold">✨ Latest Products</h2>
            <hr className="bg-white" style={{ width: "200px", margin: "0 auto" }} />
          </div>
        </div>

        {/* Category dropdown */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-4">
            <select
              className="form-select shadow"
              onChange={handleCategoryChange}
              style={{
                borderRadius: "20px",
                padding: "10px",
                fontWeight: "bold",
                backgroundColor: "#fff",
              }}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
