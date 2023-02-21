import './App.css';
import AssignmentMarks from './Component/AssignmentMarks/AssignmentMarks';
import NavBar from './Component/NavBar/NavBar';
import PhoneBar from './Component/PhoneBar/PhoneBar';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-4xl font-bold underline">
        Hello world!
      </h1>
      <p className='text-2xl'>Hey You</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
