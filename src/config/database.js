const knexfile = require('../knexfile')

// instanciando um objeto knex,o retorno é uma funcao com parametro o arquivo knexfile
const knex = require('knex')(knexfile) 
module.exports = knex

// knex('users').insert({
//     name: 'Teste2',
//     email: 'teste2@teste.com.br',
//     password: 'teste2' 
// }).then(data => console.log(data))

// knex('users').first().then(resultado => console.log(resultado))

//knex('users').where({id: 3}).first().then(resultado => console.log(resultado))