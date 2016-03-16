/**
 * Atleta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome : 'string',
    idade : 'integer',
    esporte : 'string',
    username : 'string',
    password : 'string',
    usuario : {model : 'Usuario'},
    nutricionista : { model : 'Nutricionista'},
    antropometrias : {collection : 'Antropometria'},
    refeicoes : {collection : 'Refeicao'}

  }
};

