const PROXY_CONFIG = [
    {
        context: ['/rest'],
        target: 'http://localhost:8080/Practica_3_EJB_JSF_JPA/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/rest': '' }
    }
]

module.exports = PROXY_CONFIG