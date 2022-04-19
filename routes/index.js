const pokemon = require('./pokemon')

module.exports = (router) => {
    pokemon(router)
    return router
}