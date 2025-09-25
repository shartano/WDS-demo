import pgk from 'pg';
import dotenv from 'dotenv'
dotenv.config()

const {Pool} = pgk;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(client => {
        console.log("Connected to Postgres");
        client.release();
    })
    .catch(err => console.error("Unexpected error when connecting to postgres: ", err))


export default pool;