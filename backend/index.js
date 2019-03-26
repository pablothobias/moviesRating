// const readline = require("readline-sync")

// const search_item = require('./search-items')

// async function start() {

//     const content = {}

//     content.searchName = askAndReturnMovieName()

//     await search_item(content)

//     function askAndReturnMovieName() {
//         const response = readline.question("Qual filme deseja saber a nota?");
//         const movie_title = response.split(' ').join('+');

//         return movie_title
//     }

//     console.log(content);
// }

// start()

const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/api'){
        
        console.log('req', req)
    }
})

server.listen(8080)