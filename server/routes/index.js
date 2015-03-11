/*jslint node: true */
'use strict';
var data_producto = require('../../model/data_producto.js');
var data_grupo = require('../../model/data_grupo.js');

exports.awesomeThings = function(req, res) {
    res.json([
        'Hermes Galo',
        'Zuly Sanchez',
        'Karma',
        'Express'
    ]);
};

exports.getlistado = function (req, res) {
   data_producto.connect();
   data_producto.db_get_listado(function (datos) {
     //console.log(json.stringify(datos));
     res.json(datos);
   });

  /*res.json([
    'a',
    'b',
    '3',
    'dfa'
  ]);*/
};
