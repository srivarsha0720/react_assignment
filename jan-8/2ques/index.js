const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileData = require("./read");

const app = express();
const PORT = 3000;

/* TEST ROUTE */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* READ FILE ROUTE */
app.get("/readfile", (req, res) => {
  const data = readFileData();
  res.send(data);
});

/* SYSTEM DETAILS ROUTE */
app.get("/systemdetails", (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: `${Math.round(os.totalmem() / (1024 ** 3))} GB`,
    freeMemory: `${Math.round(os.freemem() / (1024 ** 3))} GB`,
    cpuModel: os.cpus()[0].model
  };

  res.json(systemInfo);
});

/* GET IP ROUTE */
app.get("/getip", (req, res) => {
  const hostname = "masaischool.com";

  dns.lookup(hostname, (err, address) => {
    if (err) {
      res.status(500).send("DNS lookup failed");
    } else {
      res.json({
        hostname: hostname,
        ipAddress: address
      });
    }
  });
});

/* START SERVER */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});