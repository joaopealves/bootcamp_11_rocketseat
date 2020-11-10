const express = require('express');
const cors = require('cors');

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get('/repositories', (request, response) => {
  const { title } = request.query;
  const result = title
    ? repositories.filter((project) => project.title.includes(title))
    : repositories;
  console.log('------------------------------GET------------------------');
  console.log(result);
  return response.json(result);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs, likes } = request.body;

  const project = { id: uuid(), title, url, techs, likes };

  repositories.push(project);
  console.log('------------------------------POST------------------------');
  console.log(project);
  return response.json(project);
});

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositorieIndex = repositories.findIndex(
    (repositories) => repositories.id == id
  );

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'repository not found' });
  }
  const repository = { id, title, url, techs };

  repositories[repositorieIndex] = repository;

  console.log('------------------------------PUT------------------------');
  console.log(repository);
  return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex(
    (repository) => repository.id == id
  );

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'repository not found' });
  }

  repositories.splice(repositorieIndex, 1);

  console.log('------------------------------DELETE------------------------');
  console.log('Repositório deletado');

  return response.status(204).send();
});

app.put('/repositories/:id/like', (request, response) => {
  const { id } = request.params;
  const { title, url, techs, likes } = request.body;

  const result = title
    ? repositories.filter(({ title, url, techs, likes }) =>
        project.title.includes(title)
      )
    : repositories;

  console.log('------------------------------PUT LIKES-------------------');
  console.log(result);
  console.log('------------------------------PUT LIKES-------------------');

  const repositorieIndex = repositories.findIndex(
    (repositories) => repositories.id == id
  );

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'repository not found' });
  }

  const repository = { id, title, url, techs, likes };

  //O erro está aqui, os valores, title, url, techs estão retornando undefined

  console.log(repository);

  repositories[repositorieIndex] = repository;

  return response.json(repository);
});

console.log('----------------------------------------------------------');
console.log('Backend Started :3');

module.exports = app;
