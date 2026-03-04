import express from "express";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  return res.send("Pagina Inicial");
});
server.get("/About", (req, res) => {
  return res.send("Pagina Sobre");
});
server.get("/Products", (req, res) => {
  return res.send("Pagina de Produtos");
});
server.post("/", (req, res) => {
  return res.send("Pagina de post Inicial");
});

server.get("/User/:name", (req, res) => {
  const { name } = req.params;
  return res.send(`Ola ${name}`);
});
server.get("/User", (req, res) => {
  const { name, age, height } = req.query;
  return res.send(`ola ${name}, sua idade é ${age} e sua altura é ${height}`);
});
server.get("/User", (req, res) => {
  const { name, age, height } = req.query;
  return res.send(`ola ${name}, sua idade é ${age} e sua altura é ${height}`);
});

server.post("/Users", (req, res) => {
  const { name, age, height } = req.body;
  console.log(name, age, height);
  return res.send("User criado");
});
server.listen(3000);
