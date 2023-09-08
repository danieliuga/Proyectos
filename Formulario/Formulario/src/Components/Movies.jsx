
export function ListOfMOvies({ movies })  {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResults() {
    return (
        <h2>No Movies Found</h2>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies 
          ? <ListOfMOvies movies={movies} />
          : <NoMoviesResults/>
    )
}