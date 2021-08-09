import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main.js'

function App() {
  return (
    // BEM 
    <div className="app">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
