import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './App.css';


const Products = () => {
    const  [products, setUsers] = useState([]);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async() => {
            try {
                const response = await fetch ('http://localhost:3000/products');
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }    
                const json = await response.json();
                setUsers(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }  
        };

        getData();
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='products_container'>
            {products.map((el, index) => (
            <Link to={`${el?.id}`} key={index}>
                <p>Id: {el?.id}</p>
                <p>title: {el?.title}</p>
                <p>category: {el?.category}</p>
                <p>price: {el?.price}</p>
            </Link>
            ))}
        </div>
    );
};

export default Products