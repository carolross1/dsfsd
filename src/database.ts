// import mysql, { Connection } from 'promise-mysql';
// // import mysql from 'mysql2/promise';
// import keys from './keys';

// const pool= mysql.createPool(keys.database);

// pool.getConnection().then (connection=>{

//     pool.releaseConnection(connection);
//     console.log('DB is connected');

// });
// export default pool;

// src/database.ts
import mysql from 'mysql2/promise';  // Asegúrate de que estamos usando 'mysql2/promise'
import keys from './keys';  // Ruta al archivo keys.ts

// Crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
    host: keys.database.host,
    user: keys.database.user,
    password: keys.database.password,
    database: keys.database.database,
    port: keys.database.port,  // El puerto es opcional, pero si tu base de datos usa uno específico, inclúyelo
});

// Exportar el pool para que pueda ser utilizado en otros archivos
export default pool;

