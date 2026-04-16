import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../Elements/MovieCard";
export default function Favourties(){
    const {favourites}= useMovieContext();
    if(favourites.length> 0){
        return (
            <div >
                <h2>here is your favourites</h2>
            <div className="movie-grid">
           { favourites.map((movie)=> {
              return   <MovieCard movie={movie} key={movie.id}/>
            }) 
        }
            </div>
            </div>
        )
    }

    return (
    
        <div className="favorites">
            <h2>there is no favourites right now</h2>
            <p>add favourites to this list</p>
        </div>
    )
}