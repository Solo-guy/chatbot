import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BackendPanel = () => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('/backend/monitor?name=chat');
        setStatus(response.data);
      } catch (error) {
        console.error('Error fetching backend status:', error);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="backend-panel">
      <h3>Backend Management</h3>
      <div>
        <h4>Chat Backend Status</h4>
        <p>Status: {status.status}</p>
        <p>Message Count: {status.message_count}</p>
        <p>Metrics: {JSON.stringify(status.metrics)}</p>
      </div>
    </div>
  );
};

export default BackendPanel;