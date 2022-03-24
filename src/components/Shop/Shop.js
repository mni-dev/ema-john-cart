import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart= (product)=>{
        console.log(product);
        const newCart = [...cart, products];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <h2>This is for cart</h2>
                <p>Selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;