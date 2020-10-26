const express = require('express');
const cors = require('cors');

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get('/repositories', (request, response) => {
  const { title, url, techs } = request.query;
  const result = { title, url, techs }
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(result);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const project = { id: uuid(), title, url, techs };

  repositories.push(project);

  console.log(project);
  return response.json(project);
});

app.put('/repositories/:id', (request, response) => {
  // TODO
});

app.delete('/repositories/:id', (request, response) => {
  // TODO
});

app.post('/repositories/:id/like', (request, response) => {
  // TODO
});

console.log('Backend Started :3');

module.exports = app;
