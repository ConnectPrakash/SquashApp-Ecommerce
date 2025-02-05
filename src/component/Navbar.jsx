import React, { useEffect, useState } from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
function Navbar() {
  const [search,setSearch] = useState();
  const [products,setProducts] = useState([]);
  const [filtered,setFiltered] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://squashapp-ecommerce.onrender.com/`);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            console.log(data);
            setProducts(data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };
    fetchProducts();
}
,[])
  function handleSubmit(){
    <Home filtered={filtered}/>
  }

  function handleLogin(){
    navigate('/Login');
  }

  function handleSearch(e){
    e.preventDefault();
    setSearch(e.target.value)
    if (!search) {
      console.log("Please enter a search term.");
      return;
    }

     const result = products.filter((value) =>
      value.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
    console.log(filtered);
  }
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">EMart</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='about'>About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='page'>Page</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='contact'>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='Cart'>Cart</Link>
          </li>
        </ul>
        <form className="d-flex form">
          <div className="form-input">
          <input className="form-control1 me-2" value={search} onChange={(e)=>handleSearch(e)} type="search" placeholder="Search" aria-label="Search"/>
          {filtered.length > 0 && (
                <div className="input-item">
                  <ul>
                    {filtered.map((ele) => (
                      <li className="input-li" onClick={(e)=>setSearch(e.target.value)} key={ele._id}>
                        {ele.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
          
         
          <button className="nav-btn form" type="submit" onSubmit={handleSubmit}>Search</button>
          <button className="nav-btn log" onClick={handleLogin}>Log in</button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
