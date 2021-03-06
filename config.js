const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || '/files'
};

module.exports = config;