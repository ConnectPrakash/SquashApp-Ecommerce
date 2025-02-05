import React, { useContext, useEffect, useState } from 'react';
import { valueContext } from '../Context/Api';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { value } = useContext(valueContext);
  const [products, setProducts] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://squashapp-ecommerce.onrender.com`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const total = Object.entries(productCounts).reduce((sum, [productId, qty]) => {
      const product = products.find((p) => p._id === productId);
      return product ? sum + qty * Number(product.Price) : sum;
    }, 0);
    setAmount(total);
  }, [productCounts, products]);

  const handleIncrement = (productId) => {
    setProductCounts((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductCounts((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  return (
    <div>
      {value[0] ? (
        <div className="cart-container container">
          <div className="row">
            <div className="col-lg-7 cart">
              {value.map((data, index) => {
                const product = products.find((product) => product._id === data);
                return product ? (
                  <div className="cart-item" key={index}>
                    <div className="cart-img">
                      <img
                        src={product.img}
                        onClick={() => navigate(`/${product._id}`)}
                        alt={product.name}
                      />
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.Price}</p>
                    <div className="counter">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleIncrement(product._id)}
                      >
                        +
                      </button>
                      <p>{productCounts[product._id] || 0}</p>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDecrement(product._id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ) : (
                  <h2>Your Cart is Empty</h2>
                );
              })}
              <div className="cart-btn">
                <button>Place Order</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cart-rate">
                <h5>Price Details</h5>
                <hr />
                <div>
                  <h4>Quantity:</h4>
                  <p>{Object.values(productCounts).reduce((a, b) => a + b, 0)}</p>
                </div>
                <div>
                  <h4>Price:</h4>
                  <p>{amount || 0}</p>
                </div>
                <hr />
                <div>
                  <h4>Total Amount:</h4>
                  <p>{amount || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="Cart-empty">Your Cart is Empty</h2>
      )}
    </div>
  );
}

export default Cart;
