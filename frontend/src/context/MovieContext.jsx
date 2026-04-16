import { useContext, useState , useEffect , createContext, Children } from "react"
const MovieContext = createContext();

export const useMovieContext = ()=>{
   return useContext(MovieContext);   
} 

export const MovieProvider= ({children})=>{ // anything is wrapped wiht in MoviePorvider its gonna have its context in our case
    //app will be wrapped around the MovieProvider ,children is a reserved prop in jsx

    const [favourites , setFavourites]= useState([]);//initially our favourites will be empty  
        //if we have any fav movie from our local storage we set it to setfavourites 
    useEffect(()=>{
            const storedMovie = localStorage.getItem("favourites")

            if (storedMovie) setFavourites(JSON.parse(storedMovie))
    },[])
//only when the fav changes it will take place in work and the set the movie 
    useEffect(()=>{
            localStorage.setItem('favourties',JSON.stringify(favourites));
    },[favourites])

    //now we will define the three methods required for the like function
        const addTOFavourites = (movie)=> {
                setFavourites(m=>[...m , movie]) //m will get us the previous array of movies
                //..m spreads them and ,movie adds the new movie to the array
        }
        const removeFavourites = (movieID)=>{
                setFavourites(m=> m.filter((movie)=> movie.id !== movieID ))//the movieID selected for ther deletion wont get selected in the filter 
                //will return us the list of movie without that movieID
        }

        const isFavourites=(movieID)=>{
                return favourites.some((movie)=> movie.id === movieID )//this chek if anyof the movie that is present in the favourites return true 
        }


        const value= {
            favourites,
            addTOFavourites,removeFavourites,isFavourites
        }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )


}
