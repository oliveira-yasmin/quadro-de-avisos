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
 * Alterar um aviso no banco de dados
 * @param {object} aviso
 * @param {int} id id do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
  return db('avisos').where('ID_avisos', id).update(aviso)
    .then( _ =>{
      return { tipo: "sucesso", corpo: "Dados alterados com sucesso!"}
    })
    .catch(erro =>{
      return { tipo: "erro", corpo: "Não foi possível alterar os dados! "}
    })
} //fim do editar

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

/**
 * Seleciona um aviso
 * @param {*} id id do aviso selecionado
 * @return {Object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos', id)
  .then(avisos =>{return aviso})
  .catch(erro =>{
    return {tipo: "erro", corpo: "Erro: " + erro}
  })
} //fim do selecionarAviso

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos', id)
}

module.exports = {salvar, selecionarTodos, selecionarAviso, excluir, editar}
