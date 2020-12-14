//conexão com o banco de dados
const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso 
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){
  return db.insert(aviso).into('avisos')
    .then( _ =>{
      return { tipo: "sucesso", corpo: "Dados inseridos com sucesso!"}
    })
    .catch(erro =>{
      return { tipo: "erro", corpo: "Não foi possível inserir os dados! "}
    })
} //fim do salvar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados 
 * ou mensagem de erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos')
    .then(avisos =>{return avisos})
    .catch(erro =>{
      return {tipo: "erro", corpo: "Erro: " + erro}
    })
} //fim do selecionarTodos

module.exports = {salvar, selecionarTodos}
