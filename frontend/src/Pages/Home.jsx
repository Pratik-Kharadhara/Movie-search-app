import { useState ,useEffect } from "react"
import MovieCard from "../Elements/MovieCard"
import "../css/Home.css"
import { popularMovies ,searchMovies } from "../Services/api";

export default function Home(){
    const [searchQuery,setSearchquery] = useState("");
   const [movies,setMovies]=useState([]); //for getting movies from the api and setting them
   const [error,setError]=useState(null);
   const [loader,setLoader]=useState(true); //setting the loader -> true means
   //still i am loading the task , and we gonna set it false after it dones the loading (doesn't care if its a succes 
   // or any error came)

   useEffect(()=>{
        const getpopularMovies= async ()=>{
           try{
            const loadPopularMovie= await popularMovies();
            setMovies(loadPopularMovie);
            console.log(loadPopularMovie)
           }
           catch(e){
            setError('falied to load movies');
            console.log(e);
           }
           finally{
                setLoader(false);
           }
        }
        getpopularMovies();
   },[])
    
    const handleSearch=(e)=>{
        e.preventDefault();
            
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
                    m.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={m} key={m.id} />
                ))}
            </div>
        </div>
    )
}