import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      console.log(response);
    });
  }, []);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
    <>
      <Header title="Projects" />
      <button type="button" onClick={handleAddProject}>
        {' '}
        Adicionar Projeto
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
