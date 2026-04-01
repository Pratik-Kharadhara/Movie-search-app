import "../css/MovieCard.css"
export default function MovieCard({movie}){
    function MovieLike(){
        alert ("clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                    <img src={movie.src} alt={movie.title} />
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