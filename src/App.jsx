import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GetGreeting from './components/GetGreeting';

function App() {
  const user = {
    firstName: 'Muhammad',
    lastName: 'Jawwad'
  };
  return (
    <div className="App">
      <Greet name = "Abbas">
        <p>This is children props</p>
      </Greet>  
      <Greet name = "Ali"> 
        <button>Action</button>
      </Greet>
      <Greet name = "Mujtaba"/> 
      <Welcome name = "Abbas">
        <p>This is children props</p>
        <button>Action</button>
      </Welcome>
      <Welcome name = "Ali"/>
      <Welcome name = "Mujtaba"/>
      <Hello/>
      <GetGreeting user={user} />
    </div>
  );
}

export default App;
