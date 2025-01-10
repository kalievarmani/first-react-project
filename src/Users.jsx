import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './App.css';


const Users = () => {
    const  [users, setUsers] = useState([]);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async() => {
            try {
                const response = await fetch ('http://localhost:3000/users');
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
        <div className="users_container">
            {users.map((el, index) => (
                <Link to={`${el?.id}`} key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                {el?.avatar_url && (
                    <img
                        src={el.avatar_url}
                        alt={`${el.username}'s avatar`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                )}
                <p>Login: {el?.login}</p>
                <p>Password: {el?.password}</p>
                <p>Username: {el?.username}</p>
                <p>Age: {el?.age}</p>
                </Link>
            ))}
        </div>
    );
};

export default Users