import React, { Fragment, useEffect, useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

function Home({filtered}) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); // State to store product data
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://squashapp-ecommerce.onrender.com/`);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                console.log(data);
                setProducts(filtered || data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };
        fetchProducts();
    }
,[])

  return (
   
    <div className='container'>
        <div className='row gap-3'>
{
    products.map((data,index)=>{
        return(
            <Fragment key={index}>
              <div className='Home-cont col-lg-3 col-md-4 col-sm text-center border border-1 rounded p-2'>
        <div className='Home-img'>
            <img src={data.img} alt='Home-img' className='w-100 h-100'/>
        </div>
        <h3 className='p-1'>{data.name}</h3>
        <p className='pb-1'>{data.desc}</p>
        <button className='btn btn-primary w-100 p-2' onClick={()=>{navigate(`/${data._id}`)}}>Add to Cart</button>
              </div>
            </Fragment> 
        )
    })
}

     
      </div>
    </div>
  )
}

export default Home
