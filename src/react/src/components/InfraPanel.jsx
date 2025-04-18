import React, { useState } from 'react';
import axios from 'axios';

const InfraPanel = () => {
  const [command, setCommand] = useState({ service: 'kubernetes', action: '', params: {} });

  const handleExecute = async () => {
    try {
      const response = await axios.post(`/infra/manage-${command.service}`, command);
      alert(response.data.message);
    } catch (error) {
      console.error('Error executing infra command:', error);
    }
  };

  return (
    <div className="infra-panel">
      <h3>Infrastructure Management</h3>
      <div>
        <h4>Execute Command</h4>
        <select
          value={command.service}
          onChange={(e) => setCommand({ ...command, service: e.target.value })}
        >
          <option value="kubernetes">Kubernetes</option>
          <option value="redis">Redis</option>
          <option value="cloudflare">Cloudflare</option>
        </select>
        <input
          type="text"
          placeholder="Action (e.g., scale)"
          onChange={(e) => setCommand({ ...command, action: e.target.value })}
        />
        <button onClick={handleExecute}>Execute</button>
      </div>
    </div>
  );
};

export default InfraPanel;