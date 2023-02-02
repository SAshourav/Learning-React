import './App.css';

function App() {
  const nayoks = ['Rubel', 'sakib', 'Kuber', 'bapparaj', 'Salman Shah', 'Razzak'] //array
  const Nayoks = [ //array of objects
    {name: 'Rubel', rol: 'Natok'},
    {name: 'Kuber', rol: 'majhi'},
    {name: 'Bapparaj', rol: 'kosto'},
    {name: 'Salman', rol: 'bhalobasa'}
  ]
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>
            Name : {nayok}

        </li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        Nayoks.map(Nayok => <Person name={Nayok.name} job={Nayok.rol}></Person>) //making dynamic attribute
      }
      {
      /* <Person name="Rubel" job="nayok"></Person>
      <Person name="Sakil" job="bekar"></Person>
      <Person name="Kopila" job="Nayika"></Person> */}
      <Friend phone="0171068"></Friend>
    </div>
  );
}
function Person(props){ //taking attribute as an object element of object props
  return (
    <div className='person'>
      <h1>name: {props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>
  )
}

function Friend(info){
  return (
    <div className='friend'>
      <h2>Name: Sabbir</h2>
      <p>phone: {info.phone}</p>
    </div>
  )
}

export default App;
