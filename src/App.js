import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main.js';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    // BEM 
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
