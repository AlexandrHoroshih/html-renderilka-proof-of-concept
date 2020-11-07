import fastify from 'fastify';
import { compile } from './core';

const app = fastify({ logger: true });

app.get('/test', async (req) => {
  const { body, params } = req;

  console.log('/test', { body, params });
  return compile('./test/App.svelte', { title: 'test' });
});

app.get('/hero', async (req) => {
  const { body, params } = req;

  console.log('/hero', { body, params });
  return compile('./test/Hero.svelte', { someProp: 'bla' });
});

const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
