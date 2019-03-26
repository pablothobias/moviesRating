const request = require("request")

async function getName(content) {

    const movie_api = await getMovies(content.searchName)
    formatContent(movie_api)

    async function getMovies(title) {
        return new Promise((resolve, reject) => {
            request.get(`http://www.omdbapi.com/?t=${title}&apikey=cc7fecd1&?t=`,
                (err, res) => {

                    if (err) throw err
                    let json = JSON.parse(res.body);
                    resolve(json)
                }
            )
        })
    }

    function formatContent(movie_api){
        content.imd = movie_api.Ratings[0].Value
        content.rotten_tomatoes = movie_api.Ratings[1].Value
        content.metacritic = movie_api.Ratings[2].Value
    }
}

module.exports = getName