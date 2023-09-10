import React, { useEffect, useState } from 'react';
import data from './data.json';
import BorderBox from './Box/borderBox';
import './App.css';
import LoaderAnimation from './loaderAnimation/loaderAnimation';

function App() {
  const [quote, setQuote] = useState({});
  const [refresh, setRefresh] = useState([]);
  const [loading, isLoading] = useState(false);

  window.onload = () => {
    isLoading(true);
  }

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (refresh !== randomIndex) {
      setRefresh((ujang)=>[...ujang, randomIndex]);
    } 
    myRandomQoute(randomIndex);
  };

  const refreshing = () => {
    console.log(refresh);
    if (refresh.length === 0) {
      alert('History Kosong');
    } else {
      myRandomQoute(refresh.length - 1);
      setRefresh((prevRefresh) => prevRefresh.slice(0, -1));
    }
  }

  const myRandomQoute = (num) => {
    const randomQuote = data[num];
    randomQuote.id = num;
    setQuote(randomQuote);
  }
  useEffect(() => {
    getRandomQuote();
    setRefresh([]);
  }, []);
  return (
    <div className="App no-select">
      <LoaderAnimation loading={loading}/>
      <BorderBox key={quote.id} quotes={quote} randomQuote={getRandomQuote} refresh={refreshing}/>
    </div>
  );
}

export default App;
