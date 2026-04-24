import { useState } from 'react';
import ApiForm from './components/ApiForm';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className='app'>
      <h1>SRM Challenge</h1>
      <ApiForm onResponse={setResponse} onError={setError} />
      {error && <p className='error'>{error}</p>}
      <ResponseDisplay response={response} />
    </div>
  );
}

export default App;