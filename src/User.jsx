import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserItem = () => {
    const { id } = useParams(); // Extract 'id' from the route parameters

    const  [users, setUsers] = useState({});
        const  [loading, setLoading] = useState(true);

        const handleChange = (e) => {
          const {name, value} = e.target;
          setUsers((prev) => ({
            ...prev,
            [name]: value,
          }))
        }
    
        useEffect(() => {
    
            const getData = async() => {
                try {
                    const response = await fetch (`http://localhost:3000/users/${id}`);
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

    const updateItem = async (event) => {
      event.preventDefault()
      console.log(users)

      await fetch(`http://localhost:3000/users/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      })
    }

    return (
      <div>
        <h1>User Details</h1>
        <form action="" onSubmit={updateItem}>
          <input type="text"
            name='login'
            value={users.login}
            onChange={handleChange}
            placeholder="Enter login"/>

            <input type="text"
            name='password'
            value={users.password}
            onChange={handleChange}
            placeholder="Enter password"/>

            <input type="text"
            name='username'
            value={users.username}
            onChange={handleChange}
            placeholder="Enter username"/>

            <input type="number"
            name='age'
            value={users.age}
            onChange={handleChange}
            placeholder="Enter age"/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };

export default UserItem