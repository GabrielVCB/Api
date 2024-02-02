import express from "express"

const app = express();

app.use(express.json())

const clientes = [
    { id: 1, nome: "João"},
    { id: 2, nome: "Erick"}
]

//Rota Principal
app.get("/", (req, res) => {
    res.status(200).send("Api-Livros");
})

//Consultar todos os clientes
app.get("/clientes", (req, res) => {
    res.status(200).json(clientes);
})


//Consultar o cliente pelo id
app.get("/clientes/:id", (req, res) => {
    const index = buscarCliente(req.params.id);
    res.status(200).json(clientes[index])
})


//Cadastrar novo cliente
app.post("/clientes", (req, res) => {
    clientes.push(req.body);  
    res.status(201).send("Cliente cadastrado com sucesso!")
})

//Atualizar o cadastro de um cliente
app.put("/clientes/:id", (req,res) => {
    const index = buscarCliente(req.params.id);
    clientes[index].nome = req.body.nome;
    res.status(200).json(clientes)
})

//Excluir um cliente
app.delete("/clientes/:id", (req, res) => {
    const index = buscarCliente(req.params.id);
    clientes.splice(index, 1);
    res.status(200).send("Cadastro removido com sucesso!")
})

function buscarCliente(id){
    var index = clientes.findIndex(cliente => cliente.id === Number(id))
    return index
}

export default app;