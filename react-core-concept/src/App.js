import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users , setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then (data => setUser(data)) //useEffect and useState connection
  },[]); //arrow function,, empty array
  return (
    <div>
      <h2>External Users</h2>
      <p>No of Users: {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      /* {
        users.map(user => <li>{user.name}</li>) //this is the one way of do that
      }   */}
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '2px solid black', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <h3>E-mail: {props.email}</h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0); //this gives a array and we'll do destructuting
  const increaseCount = () => {
    var newCount = count + 1;
    setCount(newCount);
  }
  const dicreaseCount = () => {setCount(count-1);}
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={dicreaseCount}>Decrease</button>
    </div>
  )
}

//Practice part of 45.7
// function Product(params) {
//   return (
//     <div className="product">
//       <h3>Name: {params.name}</h3>
//       <p>Price: {params.price}</p>
//     </div>
//   )
// }

/* {
        product.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="MacBook" price="70000"></Product>
      <Product name="iPhone" price="60000"></Product> */

      // const product =[
  //   {name: 'Laptop', price: '70000'},
  //   {name: 'Tab', price: '66000'},
  //   {name: 'iPhone', price: '50000'},
  //   {name: 'Watch', price: '20000'}
  // ]

export default App;
