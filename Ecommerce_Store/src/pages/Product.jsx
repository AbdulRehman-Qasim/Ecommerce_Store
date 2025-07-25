import './Product.css';

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
  return (
    <>
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-details">
            <h5 className="product-category">{product.category}</h5>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-rating">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star text-warning"></i>
            </p>
            <h3 className="product-price">${product.price}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button
                className="btn-add"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn-buy">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
   <>
  <Navbar />

  <div className="container">
    <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>

    {/* You May Also Like Section */}
    <div className="row you-may-like-section">
      <div className="you-may-like-wrapper">
        <h2 className="you-may-like-title">You may also like</h2>
        <div className="marquee-container">
          <Marquee pauseOnHover pauseOnClick speed={50}>
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </Marquee>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</>

  );
};

export default Product;


