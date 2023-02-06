import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=> {
//     fetch('https://restcountries.com/v3.1/all')
//       .then (response => response.json())
//       .then (data => setCountries(data)) //connection with useState
//   }, [])
//   return (
//     <div>
//       <h1>Here We will load Countries</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.official} mapLink={country.maps.googleMaps}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div style={{border: '5px solid black', margin: '5px'}}>
//       <h2>Name : {props.name}</h2>
//       <p>Map : {props.mapLink}</p>
//     </div>
//   )
// }
export default App;
