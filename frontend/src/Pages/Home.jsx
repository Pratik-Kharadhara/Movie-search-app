import MovieCard from "../Elements/MovieCard"

export default function Home(){
    const movies= [
        { id: 1,title:"Charlie's Angels: Full Throttle",src:"https://randommer.io/images/movies/9471.webp",release_date:"2003"},
        {id: 2,title:"12 Rounds 2: Reloaded",src:"https://m.media-amazon.com/images/I/71z02SevNnL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2013"
},
        {id: 3,title:"When a Stranger Calls",src:"https://m.media-amazon.com/images/I/81d4DagmhgL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2006"
},
{
        id: 4 ,title:"Hatchet",src:"https://m.media-amazon.com/images/I/71d3ISAnPQL._AC_UY327_FMwebp_QL65_.jpg",release_date:"2006"

}
    ]
    
    return (
        <div className="Home">
            <div className="movie-grid">
                { movies.map((m)=>(
                      <MovieCard movie={m} key={m.id} /> 
                ))}
            </div>
        </div>
    )
}