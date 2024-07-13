const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.port,
    DB_URL: process.env.DB_URL
}