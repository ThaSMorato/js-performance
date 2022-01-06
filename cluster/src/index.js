import os from "os";
import cluster from "cluster";
import { initializeServer } from "./server.js";

(() => {
  if (!cluster.isPrimary) {
    initializeServer();
    return;
  }

  const cpusNumber = os.cpus().length;

  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking server for ${cpusNumber} CPU\n`);

  for (let i = 0; i < cpusNumber; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died`);
      cluster.fork();
    }
  });
})();

// 104k requests in 10.11s, 13 MB read
// 975 errors (0 timeouts)
