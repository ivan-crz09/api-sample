const pokemon = require("../controllers/pokemon")

module.exports = (router) => {  
    router.route('/hello').get(pokemon.hello)
    router.route('/pokemon').get(pokemon.getAll)
}