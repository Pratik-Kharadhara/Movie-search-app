import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"



export default function MovieCard({movie}){
        const {favourites,addTOFavourites,removeFavourites,isFavourites} = useMovieContext() //by running this we will get access to the functions written before
    const favourite = isFavourites(movie.id);
    
    function MovieLike(){
        if(favourite) {
            removeFavourites(movie.id)
        }
        else (
            addTOFavourites(movie)
        )
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                    { <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
            </div>
            <div className="movie-overlay">
                <h2 className="movie-title">{movie.title}</h2>
                <button className={`fav-btn ${favourite ? "active": ""}`}onClick={MovieLike}>♡</button>
            </div>
            <div className="movie-info">
              <p>  {movie.release_date} </p>
            </div>
        </div>
    )
}