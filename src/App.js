import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className="container container-fluid">
      <Counters/>
      </main>
    </React.Fragment>

  );
}

export default App;
