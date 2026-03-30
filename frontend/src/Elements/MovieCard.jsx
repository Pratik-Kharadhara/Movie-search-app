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
                <button className="fav-btn" onClick={MovieLike}>🤍</button>
            </div>
        </div>
    )
}