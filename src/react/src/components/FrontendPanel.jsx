import React, { useState } from 'react';
import axios from 'axios';

const FrontendPanel = () => {
  const [settings, setSettings] = useState({ platform: 'react', url: '', settings: {} });

  const handleUpdate = async () => {
    try {
      const response = await axios.post('/frontend/update', settings);
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating frontend:', error);
    }
  };

  return (
    <div className="frontend-panel">
      <h3>Frontend Management</h3>
      <div>
        <h4>Update Frontend</h4>
        <select
          value={settings.platform}
          onChange={(e) => setSettings({ ...settings, platform: e.target.value })}
        >
          <option value="react">React</option>
          <option value="kotlin">Kotlin</option>
          <option value="swift">Swift</option>
          <option value="cpp">C++</option>
        </select>
        <input
          type="text"
          placeholder="URL"
          value={settings.url}
          onChange={(e) => setSettings({ ...settings, url: e.target.value })}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default FrontendPanel;