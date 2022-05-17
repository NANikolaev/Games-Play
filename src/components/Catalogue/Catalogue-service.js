

async function getAll(){
    let response= await fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
    let allGames= await response.json()
    return allGames
}

export default getAll