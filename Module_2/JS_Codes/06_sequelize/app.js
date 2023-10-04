const Sequelize = require('sequelize');

const sequelize = new Sequelize('produto_sch', 'root', '12345', {
    host:  'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão estabelecida');
}).catch(function(err){
    console.log('Conexão não estabelecida:' + err);
});

const Produto = sequelize.define('produto', {
    //attributes
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

//CRIAR TABELA COM SEQUELIZE
//Produto.sync({force: true});

Produto.create({
    id: 1,
    nome: "PS5",
    preco: 3000,
    descricao: "Videogame - Sony"
})