const base_url= "https://api.themoviedb.org/3"
const api_key="46f35593f8c31e0b20daca67f815c4eb"

export const popularMovies = async()=>{
    //getting the data from fetch
    const Response = await fetch(`${base_url}/movie/popular/?api_key=${api_key}`);
    const data = Response.json();//gives us the json format 
    return data.results;
}


export const searchMovies = async(query)=>{
    //getting the data from fetch
    const Response = await fetch(`${base_url}/search/movie/?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = Response.json();//gives us the json format 
    return data.results;
}