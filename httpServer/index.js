const http = require("http");

const server = http.createServer((req, res) => {
  console.log("http://localhost:3000/");
  if (req.url === "/") {
    return res.end("Pag inicial");
  } else if (req.url === "/Products") {
    return res.end("Pagina de Products");
  } else if (req.url === "/Clients") {
    return res.end("Pagina de Clients");
  } else {
    res.statusCode = 404;
    return res.end("Não encontrado");
  }
});

server.listen(3000);
