import http from "http";


const PORT = 7000;


const rotas = {
    "/": "Projeto api-clientes",
    "/clientes": "Página de clientes"
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "test/plan"});
    res.end(rotas[req.url]);
})


server.listen(PORT, () => {
    console.log("Servidor em execução!")
})
