const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        ssl: false,
        pool: {
          acquireTimeoutMillis: 10000,
          createTimeoutMillis: 10000,
          min: 2,
          max: 20,
        },
      },
    },
  },
});
