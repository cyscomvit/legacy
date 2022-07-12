import logo from './logo.svg';
import './App.css';
import { Legacy } from './components/Legacy/Legacy';
import { Main } from './components/Main/Main';
import { AppConfig, AppProvider } from './context/AppConfig';

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Main/>
      </AppProvider>
    </div>
  );
}

export default App;
