import './App.css';
import { useEffect, useState } from 'react';
import { ClickBtn } from './ClickBtn';
import Users from './Users';
import Products from './Products'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ProductItem from './Product';
import UserItem from './User';
import ProductsItem from './ChangerApp'




const App = ()  => { 
  

  useEffect( () => {
    console.log('Hello')
    // getData()
  },[])
  
  return (
    <div className='App'>
      <nav className='Navigation'>
        <ul className='Nav_ul'>
          <li className='Li'>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/users' element={<Users></Users>}/>
        <Route path='/products' element={<Products></Products>}/>
        <Route path='/products/:id' element={<ProductItem/>}/>
        <Route path='/users/:id' element={<UserItem/>}/>
      </Routes>
    </div>
  )
  

}




export default App;














// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Products></Products>
//     </div>
//   );
// }


// const getData = async() => {
//   const response = await fetch ('http://localhost:3000/users')
//   console.log(response)
//   const json = await response.json()
//   console.log(json)
// }