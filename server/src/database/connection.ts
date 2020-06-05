import path from 'path';
import knex from 'knex';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});

// const connection = knex({
//     client: 'mysql',
//     connection: {
//         host : '127.0.0.1',
//         user : 'root',
//         password : '',
//         database : 'ecoleta'
//     }
// });

export default connection;