import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm'
import {getMoviesByName} from '../movies/helpers/index';
import { MovieItem } from '../movies/MovieItem'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q ='' } = queryString.parse(location.search);

  const movies = getMoviesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q

  });

  const onSearchSubmit = (event )=>{
    event.preventDefault();
    if (searchText.trim().length <=2 ) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }
  return (
    <>
      <h1 className="text-3xl font-bold mx-5 mt-5 mb-2">Search Page</h1>
      <hr></hr>
      <div className='grid grid-cols-3 gap-4 mt-10'>
        <div>
          <form className="flex items-center max-w-sm ms-5" onSubmit={ onSearchSubmit }>   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" 
                      strokeLinejoin="round" strokeWidth="2" 
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                  </svg>
              </div>
              <input id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                          focus:ring-violet-500 focus:border-violet-500 block w-full ps-10 p-2.5  
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                          dark:focus:ring-violet-500 dark:focus:border-violet-500" 
                type="text"
                placeholder="Search a movie..."
                name="searchText"
                autoComplete="off"
                value = {searchText}
                onChange={onInputChange}
                />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
          </button>
          </form>
        </div>
        <div>
          <h1 className='text-2xl'> Results </h1>
          <div className="flex bg-yellow-100 rounded-lg p-4 px-10 mb-4 text-sm text-yellow-700 max-w-max" role="alert">
            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd">
                      </path>
            </svg>
            <div>
              <span className="font-medium">Warning alert!</span> Search a movie to see someones
            </div>
          </div>

          <div className="flex bg-blue-100 rounded-lg p-4 px-10 mb-4 text-sm text-blue-700 max-w-max" role="alert">
            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd">
                      </path>
            </svg>
            <div>
              <span className="font-medium">Info alert!</span> No movie with <b> {q} </b>
            </div>
          </div>

          {
            movies.map( movie => (
              <MovieItem 
              key={movie.id}
              id={movie.id}
              title={movie.titulo}
              image={movie.imagenURL}
              date={movie.fechaCreacion}
              calification={movie.calificacion}
              // aca no puedo desestructurar pq se llaman distintos las properties de MovieItem con las de data
            />
            ))
          }

        </div>
      </div>
      
      
    </>
  )
}
