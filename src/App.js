import { useNavigate } from 'react-router-dom';      //this is one of the hooks provided by react-router-dom
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To React</h1>
        <button className='users-button' onClick={(e) => navigate('/users')}>Users</button> 
      </header>
    </div>
  );
}

export default App;
