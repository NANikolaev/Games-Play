

export default async function top3(){
    let response= await fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category')
    let games=await response.json()
    let top3=games.slice(0,3)
    return top3
}