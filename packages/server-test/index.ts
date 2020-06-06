import * as jsonServer from 'json-server';
import * as fs from 'fs';
import * as path from 'path';

const createDB = () => {
  const mockupsFolder = 'mockups';
  let db: any = {};
  fs.readdirSync(path.join(__dirname, mockupsFolder)).forEach(file => {
    const fileName = file.split('.', 1)[0];
    db[fileName] = require(path.join(__dirname, mockupsFolder, file)).default;
    console.log(' -> ' + fileName + ' OK');
  });
  return db;
};

const server = jsonServer.create();
const router = jsonServer.router(createDB());
const middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server-test is running on port ${PORT}`);
});
