import React, { useState } from 'react';
import axios from 'axios';

const KnowledgePanel = () => {
  const [input, setInput] = useState({ url: '', text: '' });

  const handleUpdate = async () => {
    try {
      const response = await axios.post('/knowledge/update', input);
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating knowledge:', error);
    }
  };

  return (
    <div className="knowledge-panel">
      <h3>Knowledge Management</h3>
      <div>
        <h4>Update Knowledge Base</h4>
        <input
          type="text"
          placeholder="URL"
          value={input.url}
          onChange={(e) => setInput({ ...input, url: e.target.value })}
        />
        <textarea
          placeholder="Text"
          value={input.text}
          onChange={(e) => setInput({ ...input, text: e.target.value })}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default KnowledgePanel;