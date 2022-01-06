import { createServer } from "http";
import { randomBytes } from "crypto";

import Events from "events";

const myEvent = new Events();

const getBytes = () => {
  return randomBytes(10000);
};

const onData = () => {
  getBytes();
  const items = [];
  setInterval(function myIterval() {
    items.push(Date.now());
  });
};

createServer((req, res) => {
  myEvent.on("data", onData);
  myEvent.emit("data", Date.now());

  res.end();
}).listen(3000, () => console.log("running at 3000"));
