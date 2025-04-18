// Chatbot Interface component for Left Pane
import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './ChatbotInterface.css';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('MiniCPM');
  const [models, setModels] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [latency, setLatency] = useState(0);
  const [tokenCount, setTokenCount] = useState(0);
  const [costEstimate, setCostEstimate] = useState(0);

  useEffect(() => {
    // Connect to WebSocket
    const ws = new W3CWebSocket('ws://localhost:8000/chatbot/ws');
    ws.onopen = () => setConnectionStatus('connected');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages([...messages, { type: 'bot', content: data.response }]);
    };
    ws.onclose = () => setConnectionStatus('disconnected');

    // Fetch models
    fetch('/chatbot/models')
      .then(res => res.json())
      .then(data => setModels(data.models));

    // Cleanup
    return () => ws.close();
  }, []);

  const handleSend = () => {
    if (input) {
      setMessages([...messages, { type: 'user', content: input }]);
      ws.send(JSON.stringify({ text: input, model }));
      setInput('');
    }
  };

  return (
    <div className="chatbot-interface">
      <div className="model-management">
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {models.map(m => (
            <option key={m.name} value={m.name}>{m.name} ({m.version})</option>
          ))}
        </select>
        <p>Capabilities: {models.find(m => m.name === model)?.capabilities}</p>
      </div>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.type === 'user' ? <Avatar /> : <AIIcon />}
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="nlu-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command (/create_order, /scale_pod)"
        />
        <button onClick={handleSend}>Send</button>
        <input type="file" accept=".txt,.pdf" />
        <button>Voice Input</button>
      </div>
      <div className="system-monitor">
        <span className={`led ${connectionStatus}`}></span>
        <LatencyGraph latency={latency} />
        <p>Tokens: {tokenCount}</p>
        <p>Cost: ${costEstimate.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ChatbotInterface;