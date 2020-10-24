import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: 'Front end com React',
      owner: 'João Pedro',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
