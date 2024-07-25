const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");

const app = express();

var exemploconrtroller = require("./controllers/exemplo")

var produtocontroller = require("./controllers/produto")
;
// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", exemploconrtroller.mostrarteladeexemplo);
app.get("/produto", produtocontroller.mostrartela);
app.post("/adicionar-produto",produtocontroller.adicionarproduto);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});