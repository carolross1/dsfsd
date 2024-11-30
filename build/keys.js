const mysql = require('mysql2');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exports.default = {
//     // database: {
//     //     host: 'localhost',
//     //     user: 'root',
//     //     password: '',
//     //     database: 'ng_punto_de_venta'
//     // }
//     database: {
//         host: 'autorack.proxy.rlwy.net',
//         user: 'root',
//         password: 'mLbTDbAipoLVoyyWzIiduvwZeTuuuCHa',
//         database: 'railway',
//         port: 31706
//     }
// };
module.exports ={
    database: {
        host: 'autorack.proxy.rlwy.net', // Dirección del servidor de la base de datos
        user: 'root', // Usuario de la base de datos
        password: 'mLbTDbAipoLVoyyWzIiduvwZeTuuuCHa', // Contraseña del usuario
        database: 'railway', // Nombre de la base de datos
        port: 31706, // Puerto del servidor
    },
};
