import { useState } from "react"
import MovieCard from "../Elements/MovieCard"


export default function Home(){
    const [searchQuery,setSearchquery] = useState("");
    const movies= [
        { id: 1,title:"Charlie's Angels: Full Throttle",src:"https://randommer.io/images/movies/9471.webp",release_date:"2003"},
        {id: 2,title:"12 Rounds 2: Reloaded",src:"https://m.media-amazon.com/images/I/71z02SevNnL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2013"},      
         {id: 3,title:"When a Stranger Calls",src:"https://m.media-amazon.com/images/I/81d4DagmhgL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2006"},
        { id: 4 ,title:"Hatchet",src:"https://m.media-amazon.com/images/I/71d3ISAnPQL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2006"}
    ]
    const handleSearch=(e)=>{
        e.preventDefault();
            console.log(searchQuery);
    }
    
    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                className="search-input" 
                placeholder="search movies here"
                //this is the value what we are getting after every entry in the input box  
                value={searchQuery}
                //search : e.target.value gets what is written in the input box and set it as the set query
                onChange={(e)=>setSearchquery(e.target.value)}
                />
                <button className="search-btn">🔍</button>
            </form>
            <div className="movie-grid">
                { movies.map((m)=>(
                      <MovieCard movie={m} key={m.id} /> 
                ))}
            </div>
        </div>
    )
}