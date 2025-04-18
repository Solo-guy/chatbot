import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatbotPanel = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('/chatbot/models');
        setModels(response.data.models);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };
    fetchModels();
  }, []);

  return (
    <div className="chatbot-panel">
      <h3>Chatbot Management</h3>
      <div>
        <h4>Available Models</h4>
        <ul>
          {models.map((model) => (
            <li key={model.name}>
              {model.name} ({model.version}) - {model.capabilities}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatbotPanel;