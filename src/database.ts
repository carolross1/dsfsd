// import mysql, { Connection } from 'promise-mysql';
// // import mysql from 'mysql2/promise';
// import keys from './keys';

// const pool= mysql.createPool(keys.database);

// pool.getConnection().then (connection=>{

//     pool.releaseConnection(connection);
//     console.log('DB is connected');

// });
// export default pool;

import mysql from 'mysql2/promise'; // Usar mysql2 con soporte para promesas
import keys from './keys'; // Importar configuración de la base de datos

// Crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
    host: keys.database.host,
    user: keys.database.user,
    password: keys.database.password,
    database: keys.database.database,
  
});

export default pool; // Exportar el pool para su uso en otros archivos
