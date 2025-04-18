import React, { useState } from 'react';
import axios from 'axios';
import './TaskManager.css';

const TaskManager = () => {
  const [formData, setFormData] = useState({});
  const [workflow, setWorkflow] = useState({});
  const [tracker, setTracker] = useState({});
  const [dataTable, setDataTable] = useState([]);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('/chatbot/forms', formData);
      setFormData(response.data.form);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleWorkflowUpdate = async () => {
    try {
      const response = await axios.post('/chatbot/workflow', workflow);
      setWorkflow(response.data.workflow);
    } catch (error) {
      console.error('Error updating workflow:', error);
    }
  };

  const handleTrackerUpdate = async () => {
    try {
      const response = await axios.post('/chatbot/tracker', tracker);
      setTracker(response.data.tracker);
    } catch (error) {
      console.error('Error updating tracker:', error);
    }
  };

  const handleDataTools = async () => {
    try {
      const response = await axios.post('/chatbot/datatools', { dataset: dataTable });
      setDataTable(response.data.data);
    } catch (error) {
      console.error('Error processing data tools:', error);
    }
  };

  return (
    <div className="task-manager">
      <div className="dynamic-forms">
        <h3>Dynamic Forms</h3>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL"
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
      <div className="workflow-engine">
        <h3>Workflow Engine</h3>
        <input
          type="text"
          placeholder="Action"
          onChange={(e) => setWorkflow({ ...workflow, action: e.target.value })}
        />
        <button onClick={handleWorkflowUpdate}>Update Workflow</button>
      </div>
      <div className="progress-tracker">
        <h3>Progress Tracker</h3>
        <input
          type="text"
          placeholder="Task ID"
          onChange={(e) => setTracker({ ...tracker, task_id: e.target.value })}
        />
        <button onClick={handleTrackerUpdate}>Update Tracker</button>
      </div>
      <div className="data-tools">
        <h3>Data Tools</h3>
        <button onClick={handleDataTools}>Generate Table/Chart</button>
        <div className="data-table">
          {dataTable.map((row, index) => (
            <div key={index}>{JSON.stringify(row)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;