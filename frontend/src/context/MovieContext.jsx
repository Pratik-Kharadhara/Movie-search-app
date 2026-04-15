import { useContext, useState , useEffect , createContext, Children } from "react"
const MovieContext = createContext();

export const useMovieContext = ()=>{
    useContext(MovieContext);   
} 

export const MovieProvider= ({children})=>{ // anything is wrapped wiht in MoviePorvider its gonna have its context in our case
    //app will be wrapped around the MovieProvider ,children is a reserved prop in jsx

    const [favourites , setFavourites]= useState([]);//initially our favourites will be empty  

    useEffect(()=>{
            const storedMovie = localStorage.getItem("favourites")

            if (storedMovie) setFavourites(JSON.parse)
    })
    //now we will define the three methods required for the like function


    return (
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    )


}
