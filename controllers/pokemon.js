const axios = require('axios')

module.exports = {
    hello: (req, res) => {
        res.status(200).send("Hello World")
    },

    getAll: async (req, res) => {
        const limit = req?.query?.limit || 20

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            res.status(200).json(response.data)
          } catch (error) {
            res.status(500).send('Error')
          }
    }
}