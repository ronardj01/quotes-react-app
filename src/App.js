import { useState, useEffect } from 'react';
import './App.css';
import RandomQuote from './components/RandomQuote';

function App() {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    fetchDataQuote();
  }, []);

  const fetchDataQuote = async () => {
    const quote = await fetch('http://localhost:5000/quotes/random');
    const res = await quote.json();
    const result = Object.values(res)
    setQuote(result);
  }

  return (
    <div className="App">
     { quote.length > 0 && <RandomQuote result={quote} />}
    </div>
  );
}

export default App;
