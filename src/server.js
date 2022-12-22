const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    /**
     * host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
     * digunakan untuk proses production, karena agar dapat di akses secara public
     * sehinggan nilai host akan bernilai sesuai dengan environmennya
     * lalu tambahkan ini ("start-prod": "NODE_ENV=production node ./src/server.js",) ke package.json */
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
