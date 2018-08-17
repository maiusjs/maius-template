const Maius = require('maius').default;

const PORT = 3123;
const app = new Maius({
  rootDir: __dirname,
  port: PORT,
})

app
  .listen()
  .then(() => {
    console.log(`APP Started, http://localhost:${PORT}`);
    console.log(`maius version - v${app.version}`);
  });
