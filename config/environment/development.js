var serverConfig = {
    port: 3000,
    tokenexp: 86400,
    secret: 'sarojappsecret'
};
var databaseConfig = {
    db: 'mongodb://localhost/SarojAppDb',
    sessionDb: 'mongodb://localhost/SarojAppSessionDb',
    logdDb: 'mongodb://localhost/SarojAppLogDb',
};

module.exports = {
    serverConfig: serverConfig,
    databaseConfig: databaseConfig
};