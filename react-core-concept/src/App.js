import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
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
