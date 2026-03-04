import express from "express";

const server = express();

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
server.listen(3000);
