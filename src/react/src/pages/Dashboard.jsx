import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.post('/monitoring/monitor-metrics', {
          metric: 'system_metrics',
          timeframe: '1h'
        });
        setMetrics(response.data.metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>
        <h3>System Metrics</h3>
        <ul>
          {metrics.map((metric, index) => (
            <li key={index}>{JSON.stringify(metric)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;