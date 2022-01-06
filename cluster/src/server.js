import { createServer } from "http";
import { appendFile } from "fs/promises";

export function initializeServer() {
  const handler = async (req, res) => {
    const result = Array.from({ length: 1e3 }, (_) => Math.floor(Math.random() * 40)).reduce(
      (acc, val) => acc + val,
      0
    );

    await appendFile("./log/log.txt", `${result} processed by ${process.pid}\n`);

    res.end(result.toString());
  };

  createServer(handler).listen(3000, () =>
    console.log(`sever running at 3000 and PID ${process.pid}`)
  );

  setTimeout(() => process.exit(1), Math.random() * 1e4);
}
