import "../css/MovieCard.css"
export default function MovieCard({movie}){
    function MovieLike(){
        
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                    { <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
            </div>
            <div className="movie-overlay">
                <h2 className="movie-title">{movie.title}</h2>
                <button className="fav-btn" onClick={MovieLike}>🤍</button>
            </div>
            <div className="movie-info">
              <p>  {movie.release_date} </p>
            </div>
        </div>
    )
}