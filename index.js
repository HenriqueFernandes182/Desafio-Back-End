const express = require ('express');

const server = express();

server.use(express.json());

const users = [];

server.get('/', (req,res) =>{
    return res.json({
        result: 'Hello world'
    });
});

server.get('/about', (req,res) =>{
    return res.json({
        result: 'este é o primeiro Backend'
    });
});

server.post('/users', (req,res) =>{
    const nome = req.body.nome;    
    const email = req.body.email;
    const idade = req.body.idade;
    const phone = req.body.phone;

    const user = {
        nome,
        email,
        idade,
        phone
    };

    users.push(user);
    console.log(user);

    return res.json(user);   
});

server.get('/users', (req,res) =>{
    return res.json({users});
});

server.put('/user/:id', (req,res) =>{
    const {nome, email, idade, phone} = req.body;
    const {id} = req.params;

    const user = {
        nome,
        email,
        idade,
        phone
    }
    users[id] = user;

    return res.json({
        result: 'dados atualizados'        
    });    
});

server.listen(3000);