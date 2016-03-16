/**
 * Refeicao.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    atleta : { model : 'Atleta'},
    nutricionista : { model : 'Nutricionista'},
    image : 'binary',
    path : 'string',
    file : {model : 'File'},
    alimentos : { collection : 'Alimento'},
    tags : { collection : 'Tag'}

  }
};

