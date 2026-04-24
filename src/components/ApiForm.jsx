import { useState } from 'react';
import { callBfhlApi } from '../utils/api';

const ApiForm = ({ onResponse, onError }) => {
  const [input, setInput] = useState('["A->B", "A->C", "B->D"]'); // Default example
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    onError(null); // Clear previous errors

    try {
      const data = JSON.parse(input); // Parse textarea as JSON array
      const response = await callBfhlApi(data);
      onResponse(response);
    } catch (error) {
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="api-form">
      <label htmlFor="data-input">Enter data array (JSON format):</label>
      <textarea
        id="data-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='e.g., ["A->B", "A->C"]'
        rows={4}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ApiForm;