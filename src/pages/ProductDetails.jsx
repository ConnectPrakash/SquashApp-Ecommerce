import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import './ProductDetails.css';
import { valueContext } from '../Context/Api';

function ProductDetails() {
    const {value ,setValue} = useContext(valueContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        img: '',
        name: '',
        desc: '',
        Price: 0,
        qty: 0,
        Stock: '',
        rating: 0,
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://squashapp-ecommerce.onrender.com/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product details');
                const product = await response.json();
                setData(product); // Update state with fetched product data
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            }
        };
        fetchProducts();
    }, [id]);

    return (
        <div className='Product-container'>
            <div className='Product-img'>
                <img src={data.img || '/placeholder.jpg'} alt={data.name || 'Product'} />
            </div>
            <div className='Product-Content'>
                <h2>{data.name || 'Product Name'}</h2>
                <h5>{data.desc || 'No description available'}</h5>
                <div className='stars'>
                    <ReactStars
                        count={5}
                        value={data.rating}
                        size={24}
                        color2={'#ffd700'}
                        edit={false}
                    />
                </div>
                <h4>Price: ${data.Price || 0}</h4>
                <div className='Stock'>
                    <p>Quantity: {data.qty || 0}</p>
                    <h5
                        className={data.Stock.toLowerCase() === 'in stock' ? 'text-success' : 'text-danger'}
                    >
                        {data.Stock || 'Out of Stock'}
                    </h5>
                </div>
                <button className='btn btn-primary' onClick={()=>setValue((prev) =>[...prev,data._id])}>Add to Cart</button>
            </div>
            
        </div>
    );
}

export default ProductDetails;
