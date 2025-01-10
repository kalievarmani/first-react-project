import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductItem = () => {
    const { id } = useParams(); // Extract 'id' from the route parameters

    const  [products, setProducts] = useState({});
        const  [loading, setLoading] = useState(true);
    
        useEffect(() => {
    
            const getData = async() => {
                try {
                    const response = await fetch (`http://localhost:3000/products/${id}`);
                    if(!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }    
                    const json = await response.json();
                    setProducts(json);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }  
            };
    
            getData();
        }, []);

    const handleChange = (e) => {

      const {name, value} = e.target;
          setProducts((prev) => ({
            ...prev,
            [name]: value,
          }))
    }

    const updateItem = async (event) => {
      event.preventDefault()
      console.log(products)

      await fetch(`http://localhost:3000/products/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
    }
  
    return (
      <form onSubmit={updateItem}>
        <input type="text"
          name='title'
          value={products.title}
          onChange={handleChange}
          placeholder="Enter title"
        />

        <input type="text"
          name='category'
          value={products.category}
          onChange={handleChange}
          placeholder="Enter category"
        />

        <input type="text"
          name='price'
          value={products.price}
          onChange={handleChange}
          placeholder="Enter price"
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

export default ProductItem