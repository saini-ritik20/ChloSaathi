import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
